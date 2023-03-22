import { makeAutoObservable } from "mobx";
import { RootStore } from "RootStore";

import * as requests from "./requests";

class DeckStore {
  rootStore: RootStore;

  submitting = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  createNewDeck = (): Promise<void> => {
    this.submitting = true;

    return requests
      .createNewDeck()
      .then(() => {
        console.log("yay!");
      })
      .catch(() => {
        console.log("oops!");
      })
      .finally(() => {
        this.submitting = false;
      });
  };
}

export default DeckStore;
