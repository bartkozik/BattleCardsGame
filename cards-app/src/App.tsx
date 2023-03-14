import React, { createContext } from "react";
import { createNewDeck, shuffle } from "./cardsOperations/deckLogic";
import Router from "./routers/Router";

export type CardContextType = ReturnType<typeof createNewDeck>;
export const CardContext = createContext<CardContextType>(createNewDeck());

function App() {
  const deckBase = createNewDeck();
  const deck = shuffle(deckBase);

  return (
    <CardContext.Provider value={deck}>
      <Router />
    </CardContext.Provider>
  );
}

export default App;
