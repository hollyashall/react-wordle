import React from "react";
import "./Board.scss";

const Board = ({ word }) => {
  
  const letterArr = word.toString().split("");
 

  return (
    <>
      <div className="container">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">6</div>
        <div className="item">6</div>
        <div className="item">6</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">6</div>
        <div className="item">6</div>
        <div className="item">6</div>
        <div className="item">{letterArr[0]}</div>
        <div className="item">{letterArr[1]}</div>
        <div className="item">{letterArr[2]}</div>
        <div className="item">{letterArr[3]}</div>
        <div className="item">{letterArr[4]}</div>
      </div>
    </>
  );
};
export default Board;
