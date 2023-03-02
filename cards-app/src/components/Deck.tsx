import React, { useState } from "react";
import CardComponent from "./CardComponent";
import { Suit, Rank } from "../types";

export type DeckComponentProps = {
  cards: {
    suit: Suit;
    rank: Rank;
  }[];
  shuffleDeck?: boolean;
};

const DeckComponent = ({
  cards,
  shuffleDeck = false,
}: DeckComponentProps): JSX.Element => {
  const [deck, setDeck] = useState(cards);

  const handleShuffle = () => {
    console.log(deck);
  };

  return (
    <div className="deck-container" onClick={handleShuffle}>
      {deck?.map((card, index) => (
        <CardComponent key={index} drawnCard={card} />
      ))}
    </div>
  );
};

export default DeckComponent;
