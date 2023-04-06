import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "RootStore";

import styles from "./ScoreBoard.module.scss";

const ScoreBoard = (): JSX.Element => {
  const { gameStore } = useStores();
  const { playerScore, computerScore } = gameStore;

  return (
    <div className={styles.scoreBoard}>
      <span>Player: {playerScore}</span>
      <span>Computer: {computerScore}</span>
    </div>
  );
};

export default observer(ScoreBoard);
