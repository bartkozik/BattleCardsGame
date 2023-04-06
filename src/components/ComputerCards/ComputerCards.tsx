import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "RootStore";
import CardComponent from "theme/Card";
import InfoBoard from "theme/InfoBoard";

import styles from "./ComputerCards.module.scss";

const ComputerCards = (): JSX.Element => {
  const { deckStore, gameStore } = useStores();
  const { computerCards, playerCards, pairsToCompare } = deckStore;
  const { isComputerCardRevealed, toggleComputerCardRevealed, topCardIndex, setNextTopCardIndex } =
    gameStore;

  const handleClick = (): void => {
    if (!isComputerCardRevealed) {
      toggleComputerCardRevealed();
    } else {
      const currentComputerCard = computerCards[topCardIndex];
      const lastPlayerCard = playerCards[playerCards.length - 1];

      gameStore.compareCards(lastPlayerCard, currentComputerCard);

      setNextTopCardIndex();
      toggleComputerCardRevealed();
    }
  };

  return (
    <>
      {pairsToCompare === 0 ? (
        <InfoBoard />
      ) : (
        <div className={styles.computerCards} onClick={handleClick}>
          {
            <CardComponent
              isFront={isComputerCardRevealed}
              drawnCard={computerCards[topCardIndex]}
            />
          }
        </div>
      )}
    </>
  );
};

export default observer(ComputerCards);
