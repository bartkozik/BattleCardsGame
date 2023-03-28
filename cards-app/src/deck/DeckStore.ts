import { makeAutoObservable } from "mobx";
import { RootStore } from "RootStore";

import * as requests from "./requests";
import { DeckResponse, Deck, Card } from "./models";

class DeckStore {
  rootStore: RootStore;

  submitting = false;
  error = null;
  deckId = "";
  cards: Card[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  fetchNewCards = (deckID: string): Promise<Card[] | void> => {
    return requests.fetchNewCards(deckID).then(({ data: { cards } }) => {
      this.cards = cards;
      return this.cards;
    });
  };

  createNewDeck = (): Promise<DeckResponse | void | Card[]> => {
    this.submitting = true;
    this.error = null;

    return requests
      .createNewDeck()
      .then((response) => {
        this.deckId = response.data.deck_id;
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
