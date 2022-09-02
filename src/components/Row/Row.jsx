import React from "react";

// Destructure the props object to get the two values "letterArrWordGuess", "letterArr"
const row = ({ guess, letterArr, guesses }) => {
  return (
    <div className="container">
      {
        // 1. Go through our array of guesses
        guess.map((letter, index) => {
          let className = "item";
          console.log(guesses);
          console.log(guess);
          if (letterArr[index] === guess[index]) {
            console.log("the same");
            className += " correct";
          } else if (letterArr.includes(letter)) {
            console.log(true);
            className += " includedLetter";
          } else if (letterArr) {
            console.log(false);
            className += " incorrectLetter";
          } else if (guesses.includes(guess)) {
            console.log("You cannot repeat words!");
            className += " included";
          }
          // 5 letter word

          return <div className={className}>{letter.toUpperCase()}</div>;
        })
      }
    </div>
  );
};
export default row;
