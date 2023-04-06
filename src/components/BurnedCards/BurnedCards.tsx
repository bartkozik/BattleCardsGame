import React from "react";
import { useStores } from "RootStore";
import { observer } from "mobx-react-lite";
import CardComponent from "theme/Card";

import styles from "./BurnedCards.module.scss";

const BurnedCards = observer((): JSX.Element => {
  const { deckStore } = useStores();
  const { burnedCards } = deckStore;

  return (
    <div className={styles.burnedCards}>
      {burnedCards.map((card, i) => (
        <CardComponent key={i} isFront drawnCard={card} />
      ))}
    </div>
  );
});

export default BurnedCards;
