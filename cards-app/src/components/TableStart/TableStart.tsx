import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cx from "clsx";
import { useStores } from "RootStore";
import { observer } from "mobx-react-lite";
import Button from "theme/Button";
import Toast from "theme/Toast";

import styles from "./TableStart.module.scss";

const TableStart = observer(() => {
  const { deckStore } = useStores();
  const { createNewDeck, submitting, error } = deckStore;
  const messageError = "Ooops!!! Something went wrong!!!";
  const navigate = useNavigate();

  const createDeck = (): void => {
    createNewDeck().then(() => {
      navigate("/table");
    });
  };

  return (
    <div className={cx(styles.table, styles.gradientTopDown)}>
      <div className={styles.gradientLeftRight}>
        <div className={styles.inCenter}>
          <h1>Play the game</h1>
          <Button buttonText="Start" onClick={createDeck} loading={submitting} />
          <Toast type={error ? "error" : "hidden"} message={messageError} />
        </div>
      </div>
    </div>
  );
});

export default TableStart;
