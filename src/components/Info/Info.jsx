import React from "react";
import "./Info.scss";
import example from "../../assets/images/example.png"

const Info = () => {
 

  return (
    <div className="container">
      <div className="container__content">
    <p>
    Guess the WORDLE in 6 tries.

Each guess must be a valid 5-letter word. Hit the enter button to submit.

After each guess, the color of the tiles will change to show how close your guess was to the word.


    </p>
    <img className="container__example" src={example} alt="example" />
    </div>
    </div>
  )

};
export default Info;
