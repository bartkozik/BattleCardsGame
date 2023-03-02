import React from "react";
import { Suit, Rank } from "../types";

export type CardComponentProps = {
  drawnCard: {
    suit: Suit;
    rank: Rank;
  };
};

const CardComponent = ({ drawnCard }: CardComponentProps): JSX.Element => {
  const { suit, rank } = drawnCard;
  const cardImage = `${process.env.PUBLIC_URL}/cards/${rank}-${suit}.png`;

  return <img src={cardImage} alt={`${rank}-${suit}`} />;
};

export default CardComponent;
