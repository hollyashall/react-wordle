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

  console.log(letterArr);
  console.log(letterArrWordGuess);
  console.log(word);

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
      <button className="button">Get a hint</button>
      <button className="button" onClick={toggleAnswer}>Show/Hide answer</button>
      </div>
      <p>letters already used: {guesses}</p>
      <div className="board">
        {guesses.map((guess) => {
          return <Row guess={guess} letterArr={letterArr}></Row>;
        })}

        {showAnswer && (
          <div className="container">
            <div className="item correct">{letterArr[0]}</div>
            <div className="item correct">{letterArr[1]}</div>
            <div className="item correct">{letterArr[2]}</div>
            <div className="item correct">{letterArr[3]}</div>
            <div className="item correct">{letterArr[4]}</div>
          </div>
        )}
      </div>
    </>
  );
};
export default Board;
