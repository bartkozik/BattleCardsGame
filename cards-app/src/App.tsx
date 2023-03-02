import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./theme/Styles.css";
import TableStart from "./components/TableStart";
import PlayTable from "./components/PlayTable";
import { createNewDeck, shuffle } from "./cardsOperations/deckLogic";

export type CardContextType = ReturnType<typeof createNewDeck>;
export const CardContext = createContext<CardContextType>(createNewDeck());

function App() {
  const deckBase = createNewDeck();
  const deck = shuffle(deckBase);

  return (
    <>
      <CardContext.Provider value={deck}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TableStart />} />
            <Route path="/table" element={<PlayTable />} />
          </Routes>
        </BrowserRouter>
      </CardContext.Provider>
    </>
  );
}

export default App;
