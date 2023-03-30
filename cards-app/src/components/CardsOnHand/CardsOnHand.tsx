import React from "react";
import { useStores } from "RootStore";
import CardComponent from "theme/Card";
import { CARD_COUNT } from "utils/constants";

import styles from "./CardsOnHand.module.scss";

const CardsOnHand = (): JSX.Element => {
  const { deckStore } = useStores();
  const { cards } = deckStore;
  const slicedCards = cards.slice(0, CARD_COUNT);

  return (
    <div className={styles.cards}>
      {slicedCards.map((card, i) => (
        <CardComponent
          key={i}
          isFront
          drawnCard={card}
          translatedToTopOnMobile={i < slicedCards.length - 3}
        />
      ))}
    </div>
  );
};

export default CardsOnHand;
