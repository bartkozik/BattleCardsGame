import React from "react";
import cx from "clsx";
import CardComponent from "theme/Card";
import { CardRevers } from "types";
import styles from "./UnflippedCards.module.scss";

interface UnflippedCardsComponentProps {
  position?: "top" | "left" | "right";
}

const UnflippedCardsComponent = ({
  position,
}: UnflippedCardsComponentProps): JSX.Element => {
  const getPositionStyles = (): string => {
    switch (position) {
      case "left":
        return styles.left;
      case "right":
        return styles.right;
      case "top":
        return styles.top;
      default:
        return "";
    }
  };

  const cardImages: CardRevers[] = Array.from({ length: 6 }).map<CardRevers>(
    () => ({
      suit: "card",
      rank: "reversUnlight",
    })
  );

  return (
    <div className={cx(styles.cards, getPositionStyles())} >
      {cardImages.map((image, index) => (
        <CardComponent isFront={false} key={index} drawnCard={image} />
      ))}
    </div>
  );
};

export default UnflippedCardsComponent;
