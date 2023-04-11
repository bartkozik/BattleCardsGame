import React, { useState } from "react";
import TutorialModal from "components/TutorialModal";
import { tutorialSlides } from "utils/tutorialSlides";

import styles from "./HelpButton.module.scss";

export const HelpButton = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.helpButtonContainer}>
      <button className={styles.helpButton} onClick={() => setIsModalOpen(true)}>
        ?
      </button>
      <TutorialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        slides={tutorialSlides}
      />
    </div>
  );
};

export default HelpButton;
