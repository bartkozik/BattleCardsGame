import React, { useState } from "react";
import CardComponent from "theme/Card/Card";
import { Suit, Rank } from "types";
import styles from "./Deck.module.scss";

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

  const handleShuffle = (): void => {
    console.log(deck);
  };

  return (
    <div className={styles.deckContainer} onClick={handleShuffle}>
      {deck?.map((card, index) => (
        <CardComponent isFront={false} key={index} drawnCard={card} />
      ))}
    </div>
  );
};

export default DeckComponent;
