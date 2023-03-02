import React from "react";

const UnflippedCardComponent = (): JSX.Element => {
  const cardImage = `${process.env.PUBLIC_URL}/cards/card-revers-unlight.png`;

  return (
    <div className="cards">
      <img src={cardImage} alt="Unfliped Card" />
      <img src={cardImage} alt="Unfliped Card" />
      <img src={cardImage} alt="Unfliped Card" />
      <img src={cardImage} alt="Unfliped Card" />
      <img src={cardImage} alt="Unfliped Card" />
      <img src={cardImage} alt="Unfliped Card" />
    </div>
  );
};

export default UnflippedCardComponent;
