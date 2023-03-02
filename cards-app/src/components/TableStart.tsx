import React from "react";
import { NavLink } from "react-router-dom";

const TableStart = (): JSX.Element => {
  return (
    <div className="table">
      <div className="up-container start"></div>
      <div className="right-container start"></div>
      <div className="left-container start"></div>
      <div className="center-container">
        <div className="in-center">
          <p>
            Play the game
            <NavLink to="/table" className="start-button">
              <button className="">
                <div className="button-text">Start</div>
              </button>
            </NavLink>
          </p>
        </div>
      </div>
      <div className="player-container start"></div>
    </div>
  );
};

export default TableStart;
