import React, { useContext } from "react";
import { CardContext } from "App";
import CardComponent from "theme/Card";
import { CARD_COUNT } from "utils/constants";

import styles from "./CardsOnHand.module.scss";

const CardsOnHand = (): JSX.Element => {
  const cardContext = useContext(CardContext);
  const slicedCards = cardContext.slice(0, CARD_COUNT);

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
