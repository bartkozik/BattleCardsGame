import React from "react";
import { Card, CardRevers } from "types";

export type CardComponentProps = {
  drawnCard: Card | CardRevers;
  isFront: boolean
};

const CardComponent = ({ drawnCard, isFront }: CardComponentProps): JSX.Element => {
  const { suit, rank } = drawnCard;
  const cardImage = isFront? `/cards/${rank}-${suit}.png` : "/cards/card-reversUnlight.png";

  return <img src={cardImage} alt={`${rank}-${suit}`} />;
};

export default CardComponent;
