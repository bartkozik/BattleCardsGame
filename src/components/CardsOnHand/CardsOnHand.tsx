import React from "react";
import { useStores } from "RootStore";
import { observer } from "mobx-react-lite";
import CardComponent from "theme/Card";
import { PLAYER_CARDS_COUNT } from "utils/constants";

import styles from "./CardsOnHand.module.scss";

const CardsOnHand = observer((): JSX.Element => {
  const { deckStore } = useStores();
  const { playerCards } = deckStore;
  const slicedCards = playerCards.slice(0, PLAYER_CARDS_COUNT);

  return (
    <div className={styles.cards}>
      {slicedCards.map((card, i) => (
        <CardComponent
          key={i}
          isFront
          drawnCard={card}
          translatedToTopOnMobile={i < slicedCards.length}
        />
      ))}
    </div>
  );
});

export default CardsOnHand;
