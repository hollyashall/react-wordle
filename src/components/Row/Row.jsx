import React from "react";

const row = ({ guess, letterArr, guesses }) => {
  return (
    <div className="container">
      {
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
      

          return <div className={className}>{letter.toUpperCase()}</div>;
        })
      }
    </div>
  );
};
export default row;
