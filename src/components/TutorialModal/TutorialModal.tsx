import React, { useState, useRef, useEffect } from "react";
import Button from "theme/Button";

import styles from "./TutorialModal.module.scss";

export interface Slide {
  imageUrl: string;
  description: string;
}

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
}

export const TutorialModal = ({
  isOpen,
  onClose,
  slides
}: TutorialModalProps): JSX.Element | null => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const handlePrev = (): void => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = (): void => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.tutorialModal} ref={modalRef}>
        <div className={styles.modalContent}>
          <div className={styles.controls}>
            <Button buttonText="Back" onClick={handlePrev} />
            <Button buttonText="Next" onClick={handleNext} />
          </div>
          <div className={styles.carousel}>
            <img src={slides[currentIndex].imageUrl} alt="Tutorial slide" />
            <p>{slides[currentIndex].description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialModal;
