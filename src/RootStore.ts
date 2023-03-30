import { createContext, useContext } from "react";
import DeckStore from "./deck";

export class RootStore {
  deckStore: DeckStore;

  constructor() {
    this.deckStore = new DeckStore(this);
  }
}

export const rootStore = new RootStore();

const RootStoreContext = createContext(rootStore);

export function useStores(): RootStore {
  const context = useContext(RootStoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }
  return context;
}

export default RootStoreContext;
