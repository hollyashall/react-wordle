import React from "react";

// Destructure the props object to get the two values "letterArrWordGuess", "letterArr"
const row = ({ guess, letterArr, guesses }) => {
  return (
    <div className="container">
      {
        // 1. Go through our array of guesses
        guess.map((letter, index) => {
          let className = "item";

          // if (guess.length < 5) {
          //   console.log("too short");
          // } else if (guesses.includes(guess)) {
          //   console.log("You cannot repeat words!");
          // } else if
          if (letterArr[index] === guess[index]) {
            console.log("the same");
            className += " correct";
          }
           else if (letterArr.includes(letter)) {
            console.log(true);
            className += " includedLetter";
          } else  {
            console.log(false);
            className += " incorrectLetter";
          }
          

          return <div className={className}>{letter}</div>
          ;
        })
      }
    </div>
  );
};
export default row;
