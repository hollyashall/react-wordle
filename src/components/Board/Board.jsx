import React from "react";
import "./Board.scss";
import { useState } from "react";
import Row from "../Row/Row";
const Board = ({ word, wordGuess }) => {
  const [guess, setGuess] = useState([]);
  const [guesses, setGuesses] = useState([]);

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

  return (
    <>
      <button onClick={submitGuess}>submit guess</button>
      {guesses.map((guess) => {
        return <Row guess={guess} letterArr={letterArr}></Row>;
      })}

      <div className=" item correct">{letterArr[0]}</div>
      <div className="item correct">{letterArr[1]}</div>
      <div className="item correct">{letterArr[2]}</div>
      <div className=" item correct">{letterArr[3]}</div>
      <div className="item correct">{letterArr[4]}</div>
    </>
  );
};
export default Board;
