import React from "react";
import "./Board.scss";
import { useState } from "react";
import Row from "../Row/Row";
const Board = ({ word, wordGuess }) => {
  const [guess, setGuess] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);




  console.log(guess);
  console.log(guesses);

  const letterArr = word.toString().split("");
  const letterArrWordGuess = wordGuess.toString().split("");

const guessesLetters = guesses.toString();
console.log(guessesLetters);

  console.log(letterArr);
  console.log(letterArrWordGuess);
  console.log(word);

const showGrid =() => {

}
showGrid()

  const submitGuess = () => {
    // 2. Add a guess to the guesses array when you push the button :)
    guesses.push(letterArrWordGuess);
    console.log(guesses);
    setGuesses([...guesses]);
  };

  const toggleAnswer = (event) => {
    setShowAnswer(!showAnswer);
  };



  return (
    <>
    <div className="buttons">
      <button className="button" onClick={submitGuess}>submit guess</button>
   
      <button className="button" onClick={toggleAnswer}>Show/Hide answer</button>
      </div>
      <p>letters already used: {guessesLetters}</p>

      <div className="board">
        {guesses.map((guess) => {
          return <Row guess={guess} letterArr={letterArr} guesses={guesses}></Row>;
        })}

        {showAnswer && (
          <div className="container">
            {/* <p className="item"></p>
            <p className="item"></p>
            <p className="item"></p>
            <p className="item"></p>
            <p className="item"></p> */}
            <div className="item correct">{letterArr[0].toUpperCase()}</div>
            <div className="item correct">{letterArr[1].toUpperCase()}</div>
            <div className="item correct">{letterArr[2].toUpperCase()}</div>
            <div className="item correct">{letterArr[3].toUpperCase()}</div>
            <div className="item correct">{letterArr[4].toUpperCase()}</div>
          </div>
        )}
      </div>
    </>
  );
};
export default Board;