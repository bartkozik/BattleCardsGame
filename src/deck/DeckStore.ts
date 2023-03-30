import { makeAutoObservable } from "mobx";
import { RootStore } from "RootStore";
import { SESSION_STORAGE_KEY } from "utils/constants";
import { DeckResponse, Card } from "./models";
import * as requests from "./requests";

class DeckStore {
  rootStore: RootStore;

  submitting = false;
  cardsLoading = false;
  error = null;
  deckId = "";
  cards: Card[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.cards = this.getFromSessionStorage() || [];
    makeAutoObservable(this);
  }

  saveToSessionStorage = (value: Card[]): void => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(value));
  };

  getFromSessionStorage = (): Card[] | null => {
    const savedData = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : null;
  };

  removeFromSessionStorage = (): void => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  };

  shuffleDeck = (deckId: string): Promise<DeckResponse> => {
    this.error = null;
    return requests.shuffleDeck(deckId).catch((error) => {
      this.error = error;
      throw error;
    });
  };

  fetchNewCards = (deckID: string): Promise<Card[] | void> => {
    this.error = null;
    this.cardsLoading = true;

    return requests
      .fetchNewCards(deckID)
      .then(({ data: { cards } }) => {
        this.cards = cards;
        this.saveToSessionStorage(this.cards);
        return this.cards;
      })
      .catch((error) => {
        this.error = error;
        throw error;
      })
      .finally(() => {
        this.cardsLoading = false;
      });
  };

  createNewDeck = (): Promise<DeckResponse | void | Card[]> => {
    this.submitting = true;
    this.error = null;

    return requests
      .createNewDeck()
      .then(({ data: { deck_id } }) => this.shuffleDeck(deck_id))
      .then(({ data: { deck_id } }) => {
        this.deckId = deck_id;
        const cards = this.fetchNewCards(this.deckId);
        return cards;
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
