import { createContext, useContext } from "react";
import DeckStore from "./deck";
import GameStore from "./game";

export class RootStore {
  deckStore: DeckStore;
  gameStore: GameStore;

  constructor() {
    this.deckStore = new DeckStore(this);
    this.gameStore = new GameStore(this);
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
