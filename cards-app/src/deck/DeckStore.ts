import { makeAutoObservable } from "mobx";
import { RootStore } from "RootStore";

import * as requests from "./requests";
import { DeckResponse } from "./models";

class DeckStore {
  rootStore: RootStore;

  submitting = false;
  error = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  createNewDeck = (): Promise<DeckResponse | void> => {
    this.submitting = true;
    this.error = null;

    return requests
      .createNewDeck()
      .then((response) => {
        return response;
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
