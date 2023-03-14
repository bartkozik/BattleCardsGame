import React, { useContext, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CardContext } from "App";
import CardComponent from "theme/Card/Card";
import styles from "./CardsOnHand.module.scss";

const SlicedCards = 6;

const CardOnHand = (): JSX.Element => {
  const [areCardsShown, setAreCardsShown] = useState(true);
  const cardContext = useContext(CardContext);

  const handleOnClick = (): void => {
    setAreCardsShown(true);
  };

  return (
    <div className={styles.cards} onClick={handleOnClick}>
      <TransitionGroup>
        {areCardsShown && (
          <>
            {cardContext.slice(0, SlicedCards).map((card, index) => (
              <CSSTransition
                key={index}
                timeout={700}
                classNames="card"
                appear={true}
              >
                <CardComponent isFront drawnCard={card} />
              </CSSTransition>
            ))}
          </>
        )}
      </TransitionGroup>
    </div>
  );
};

export default CardOnHand;
