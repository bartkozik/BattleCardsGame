import React, { useContext, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CardComponent from "./CardComponent";
import { CardContext } from "../App";

const CardOnHandComponent = (): JSX.Element => {
  const [showCards, setShowCards] = useState(false);
  const cardContext = useContext(CardContext);

  const handleOnClick = () => {
    setShowCards(true);
  };

  return (
    <div className="cards" onClick={handleOnClick}>
      <TransitionGroup>
        {showCards && (
          <>
            {cardContext.slice(0, 6).map((card, index) => (
              <CSSTransition timeout={700} classNames="card" appear={true}>
                <CardComponent key={index} drawnCard={card} />
              </CSSTransition>
            ))}
          </>
        )}
      </TransitionGroup>
    </div>
  );
};

export default CardOnHandComponent;
