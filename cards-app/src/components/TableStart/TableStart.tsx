import React from "react";
import cx from "clsx";
import Button from "theme/Button";
import { useStores } from "RootStore";

import styles from "./TableStart.module.scss";

const TableStart = (): JSX.Element => {
  const { deckStore } = useStores();
  const { createNewDeck } = deckStore;

  return (
    <div className={cx(styles.table, styles.gradientTopDown)}>
      <div className={styles.gradientLeftRight}>
        <div className={styles.inCenter}>
          <h1>Play the game</h1>
          <Button href="/table" buttonText="Start" />

          <button onClick={createNewDeck}>Create new deck</button>
        </div>
      </div>
    </div>
  );
};

export default TableStart;
