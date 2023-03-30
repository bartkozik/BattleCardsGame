import React from "react";

import styles from "./CardLoader.module.scss";

const CardLoader = (): JSX.Element => {
  const cardImage = "/cards/JOKER.png";
  return (
    <div className={styles.loader}>
      <img src={cardImage} alt="Loading..." className={styles.image} />
    </div>
  );
};

export default CardLoader;
