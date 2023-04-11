import React from "react";
import cx from "clsx";
import { useStores } from "RootStore";
import { observer } from "mobx-react-lite";
import ScoreBoard from "components/ScoreBoard";
import ComputerCards from "components/ComputerCards";
import BurnedCards from "components/BurnedCards";
import CardsOnHand from "components/CardsOnHand";
import Button from "theme/Button";
import UnflippedCardsComponent from "components/UnflippedCards";
import HelpButton from "components/HelpButton";
import Loader from "theme/Loader";

import styles from "./PlayTable.module.scss";

const PlayTable = (): JSX.Element => {
  const { deckStore } = useStores();
  const { cardsLoading, pairsToCompare } = deckStore;

  return (
    <div className={cx(styles.table, styles.gradientTopDown)}>
      <div className={styles.gradientLeftRight}>
        <div className={styles.tableBackgroundPlay} />
        <HelpButton />
        <div className={styles.exitContainer}>
          <Button href="/" buttonText="Exit" />
        </div>
        <ScoreBoard />
        <UnflippedCardsComponent position="top" />
        <UnflippedCardsComponent position="left" />
        <UnflippedCardsComponent position="right" />
        <div className={styles.centerContainer}>
          <div className={styles.deckContainer}>
            {pairsToCompare !== 0 && (
              <img className="card-back" src="/cards/card-revers.png" alt="Card back" />
            )}
            <ComputerCards />
          </div>
          {pairsToCompare !== 0 && <BurnedCards />}
        </div>
        {cardsLoading ? <Loader /> : <CardsOnHand />}
      </div>
    </div>
  );
};

export default observer(PlayTable);
