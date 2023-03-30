import React, { createContext } from "react";
import { createNewDeck, shuffle } from "./cardsOperations/deckLogic";
import Router from "./routers/Router";
import RootStoreContext, { rootStore } from "RootStore";

export type CardContextType = ReturnType<typeof createNewDeck>;
export const CardContext = createContext<CardContextType>(createNewDeck());

function App() {
  const deckBase = createNewDeck();
  const deck = shuffle(deckBase);

  return (
    <RootStoreContext.Provider value={rootStore}>
      <CardContext.Provider value={deck}>
        <Router />
      </CardContext.Provider>
    </RootStoreContext.Provider>
  );
}

export default App;
