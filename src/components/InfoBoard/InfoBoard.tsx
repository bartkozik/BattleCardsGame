import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useStores } from "RootStore";
import Button from "theme/Button";
import Toast from "theme/Toast";

import styles from "./InfoBoard.module.scss";

const InfoBoard = (): JSX.Element => {
  const { deckStore, gameStore } = useStores();
  const navigate = useNavigate();
  const { createNewDeck, submitting, error } = deckStore;
  const { winnerMessage } = gameStore;
  const messageError = "Ooops!!! Something went wrong!!!";

  const createDeck = (): void => {
    createNewDeck().then(() => {
      navigate("/table");
    });
  };

  return (
    <div className={styles.scoreBoard}>
      <div className={styles.inCenter}>
        <h1>{winnerMessage}</h1>
        <Button buttonText="Play Again" onClick={createDeck} loading={submitting} />
      </div>
      <Toast type={error ? "error" : "hidden"} message={messageError} />
    </div>
  );
};

export default observer(InfoBoard);
