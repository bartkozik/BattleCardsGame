import React from "react";
import cx from "clsx";
import CardComponent from "theme/Card";
import { CardReverse } from "types";
import { CARD_COUNT } from "utils/constants";

import styles from "./UnflippedCards.module.scss";

interface UnflippedCardsComponentProps {
  position: "top" | "left" | "right";
}

const UnflippedCardsComponent = ({ position }: UnflippedCardsComponentProps): JSX.Element => {
  const cardImages: CardReverse[] = Array.from({
    length: CARD_COUNT
  }).map<CardReverse>(() => ({
    suit: "card",
    value: "reversUnlight"
  }));

  return (
    <div className={cx(styles.cards, styles[position])}>
      {cardImages.map((image, index) => (
        <CardComponent key={index} drawnCard={image} />
      ))}
    </div>
  );
};

export default UnflippedCardsComponent;
