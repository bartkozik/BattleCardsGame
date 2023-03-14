import React from "react";
import cx from "clsx";
import Button from "theme/Button";
import styles from "./TableStart.module.scss";

const TableStart = (): JSX.Element => {
  return (
    <div className={cx(styles.table, styles.gradientTopDown)}>
      <div className={styles.gradientLeftRight}>
        <div className={styles.middleBox}>
          <div className={styles.centerBorder}>
            <div className={styles.centerContainer}>
              <div className={styles.inCenter}>
                <h1>Play the game</h1>
                <Button href="/table" buttonText="Start" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableStart;
