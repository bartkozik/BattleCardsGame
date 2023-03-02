import React from "react";
import { NavLink } from "react-router-dom";
import CardComponent from "./CardComponent";
import CardOnHandComponent from "./CardsOnHand";
import UnflippedCardComponent from "./UnflippedCards";

const PlayTable = (): JSX.Element => {
  return (
    <div className="table">
      <img alt="play-patern" className="table-background-play" />
      <div className="exit-container">
        <NavLink to="/" className="link_element">
          Exit
        </NavLink>
      </div>
      <div className="up-container">
        <UnflippedCardComponent />
      </div>
      <div className="right-container">
        <UnflippedCardComponent />
      </div>
      <div className="left-container">
        {/* karty blank */}
        <UnflippedCardComponent />
      </div>
      <div className="center-container play-table">
        <div className="deck-container">
          <img
            className="card-back"
            src={`${process.env.PUBLIC_URL}/cards/card-revers.png`}
            alt="Card back"
          />
          <div className="card-from-deck">{/* karta z góry talii */}</div>
        </div>
        <div className="middle-container">
          {/* Karty spalone w grze */}
          <img
            className="card-back"
            src={`${process.env.PUBLIC_URL}/cards/JOKER.png`}
            alt="Card back"
          />
          <img
            className="card-back"
            src={`${process.env.PUBLIC_URL}/cards/JOKER.png`}
            alt="Card back"
          />
          <img
            className="card-back"
            src={`${process.env.PUBLIC_URL}/cards/JOKER.png`}
            alt="Card back"
          />
        </div>
      </div>
      <div className="player-container">
        <CardOnHandComponent />
      </div>
    </div>
  );
};

export default PlayTable;
