

import React from 'react'

// Destructure the props object to get the two values "letterArrWordGuess", "letterArr"
 const row = ({guess, letterArr}) => {

 

  

  return (
    <div className="container">
        {
          // 1. Go through our array of guesses
          guess.map((letter, index) => {
            let className = "item";

            if (letterArr[index] === guess[index]) {
              console.log("the same");
              className += " correct";
            } else if (letterArr.includes(letter)) {
              console.log(true);
              className += " includedLetter";
            } else {
              console.log(false);
              
            }

            return <div className={className}>{letter}
            </div>
           
            ; 
          })
        }
    </div>
  )
}
export default row
