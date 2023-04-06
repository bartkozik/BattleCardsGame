import { makeAutoObservable } from "mobx";
import { RootStore } from "RootStore";
import {
  saveToSessionStorage,
  getFromSessionStorage,
  removeFromSessionStorage
} from "utils/sessionStorageHelpers";
import {
  COMPUTER_CARDS_STORAGE_NAME,
  PLAYER_CARDS_STORAGE_NAME,
  PLAYER_SCORE_STORAGE_NAME,
  COMPUTER_SCORE_STORAGE_NAME,
  BURNED_CARDS_STORAGE_NAME,
  PAIRS_TO_COMPARE_STORAGE_NAME
} from "utils/constants";
import { DeckResponse, Card, GameCards } from "./models";
import * as requests from "./requests";

const PAIRS_TO_COMPARE = 25;

class DeckStore {
  rootStore: RootStore;

  submitting = false;
  cardsLoading = false;
  error = null;
  deckId = "";
  cards: Card[] = [];
  computerCards: Card[] = [];
  playerCards: Card[] = [];
  burnedCards: Card[] = [];
  pairsToCompare = PAIRS_TO_COMPARE;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    const savedData = getFromSessionStorage([
      COMPUTER_CARDS_STORAGE_NAME,
      PLAYER_CARDS_STORAGE_NAME,
      BURNED_CARDS_STORAGE_NAME,
      PAIRS_TO_COMPARE_STORAGE_NAME
    ]);

    const {
      computerCards = [],
      playerCards = [],
      burnedCards = [],
      pairsToCompare = PAIRS_TO_COMPARE
    } = savedData || {};

    this.computerCards = computerCards;
    this.playerCards = playerCards;
    this.burnedCards = burnedCards;
    this.pairsToCompare = pairsToCompare;

    makeAutoObservable(this);
  }

  shuffleDeck = (deckId: string): Promise<DeckResponse> => {
    this.error = null;
    return requests.shuffleDeck(deckId).catch((error) => {
      this.error = error;
      throw error;
    });
  };

  removeTopCards = (playerCard: Card, computerCard: Card): void => {
    if (playerCard && computerCard) {
      const playerCardIndex = this.playerCards.indexOf(playerCard);
      const computerCardIndex = this.computerCards.indexOf(computerCard);

      if (playerCardIndex > -1) {
        this.playerCards.splice(playerCardIndex, 1);
      }

      if (computerCardIndex > -1) {
        this.computerCards.splice(computerCardIndex, 1);
      }

      this.burnedCards.push(playerCard);
      this.burnedCards.push(computerCard);
    }
    this.pairsToCompare -= 1;

    saveToSessionStorage({
      computerCards: this.computerCards,
      playerCards: this.playerCards,
      burnedCards: this.burnedCards,
      pairsToCompare: this.pairsToCompare
    });
  };

  splitDeck = (cards: Card[]): GameCards => {
    const computerCards = cards.filter((_, index) => index % 2 === 0);
    const playerCards = cards.filter((_, index) => index % 2 !== 0);
    return { computerCards, playerCards };
  };

  fetchNewCards = (deckID: string): Promise<GameCards | void> => {
    this.error = null;
    this.cardsLoading = true;

    return requests
      .fetchNewCards(deckID)
      .then(({ data: { cards } }) => {
        this.cards = cards;
        const { computerCards, playerCards } = this.splitDeck(this.cards);
        this.computerCards = computerCards;
        this.playerCards = playerCards;
        saveToSessionStorage({
          computerCards: this.computerCards,
          playerCards: this.playerCards
        });
        return { computerCards: this.computerCards, playerCards: this.playerCards };
      })
      .catch((error) => {
        this.error = error;
        throw error;
      })
      .finally(() => {
        this.cardsLoading = false;
      });
  };

  createNewDeck = (): Promise<DeckResponse | void | GameCards> => {
    removeFromSessionStorage([
      COMPUTER_CARDS_STORAGE_NAME,
      PLAYER_CARDS_STORAGE_NAME,
      BURNED_CARDS_STORAGE_NAME,
      PAIRS_TO_COMPARE_STORAGE_NAME,
      PLAYER_SCORE_STORAGE_NAME,
      COMPUTER_SCORE_STORAGE_NAME
    ]);
    this.submitting = true;
    this.error = null;

    this.burnedCards = [];
    this.pairsToCompare = PAIRS_TO_COMPARE;
    this.rootStore.gameStore.playerScore = 0;
    this.rootStore.gameStore.computerScore = 0;

    return requests
      .createNewDeck()
      .then(({ data: { deck_id } }) => this.shuffleDeck(deck_id))
      .then(({ data: { deck_id } }) => {
        this.deckId = deck_id;
        return this.fetchNewCards(this.deckId);
      })
      .catch((error) => {
        this.error = error;
        throw error;
      })
      .finally(() => {
        this.submitting = false;
      });
  };
}

export default DeckStore;
