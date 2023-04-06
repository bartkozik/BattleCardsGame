import React from "react";

import styles from "./Loader.module.scss";

const Loader = (): JSX.Element => {
  return (
    <div className={styles.loader}>
      <span className={styles.spinner}></span>
    </div>
  );
};

export default Loader;
