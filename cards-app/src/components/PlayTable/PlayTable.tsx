import React from "react";
import cx from "clsx";
import CardOnHand from "../CardsOnHand";
import UnflippedCardsComponent from "theme/UnflippedCards";
import Button from "theme/Button";
import styles from "./PlayTable.module.scss";

const PlayTable = (): JSX.Element => {
  return (
    <div className={cx(styles.table, styles.gradientTopDown)}>
      <div className={styles.gradientLeftRight}>
        <div className={styles.tableBackgroundPlay} />
        <div className={styles.exitContainer}>
          <Button href="/" buttonText="Exit" />
        </div>
        <UnflippedCardsComponent position="top" />
        <UnflippedCardsComponent position="left" />
        <UnflippedCardsComponent position="right" />
        <div className={styles.centerContainer}>
          <div className={styles.deckContainer}>
            <img
              className="card-back"
              src="/cards/card-revers.png"
              alt="Card back"
            />
          </div>
          <div className="card-from-deck">{/* karta z góry talii */}</div>
          <div className={styles.middleContainer}>
            {/* Karty spalone w grze */}
            <img className="card-back" src="/cards/JOKER.png" alt="Card back" />
            <img className="card-back" src="/cards/JOKER.png" alt="Card back" />
            <img className="card-back" src="/cards/JOKER.png" alt="Card back" />
          </div>
        </div>
        <CardOnHand />
      </div>
    </div>
  );
};

export default PlayTable;
