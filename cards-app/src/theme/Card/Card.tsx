import React from "react";
import { useMediaQuery } from "react-responsive";
import { Card, CardReverse } from "types";

export type CardComponentProps = {
  drawnCard: Card | CardReverse;
  isFront?: boolean;
  translatedToTopOnMobile?: boolean;
};

const CardComponent = ({
  drawnCard,
  isFront,
  translatedToTopOnMobile = false,
}: CardComponentProps): JSX.Element => {
  const { suit, rank } = drawnCard;
  const cardImage = isFront
    ? `/cards/${rank}-${suit}.png`
    : "/cards/card-reversUnlight.png";

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const generateRandomTopValue = (): string => {
    const minValue = 20;
    const maxValue = 30;
    const offset = isMobile ? (translatedToTopOnMobile ? 30 : 130) : 30;

    return `${
      Math.floor(Math.random() * (maxValue - minValue + 1)) + offset
    }px`;
  };

  return (
    <img
      style={{ top: generateRandomTopValue() }}
      src={cardImage}
      alt={`${rank}-${suit}`}
    />
  );
};

export default CardComponent;
