import "./App.scss";
import { useState, useEffect } from "react";
import React from "react";
import Board from "./components/Board/Board.jsx";
import Timer from "./components/Timer/Timer.jsx";
import Info from "./components/Info/Info.jsx";
const App = () => {
  const [word, setWords] = useState("");
  const [wordGuess, setWordGuess] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const getWords = () => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setWords(jsonResponse);
      });
  };

  useEffect(() => {
    getWords();
  }, []);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setWordGuess(cleanInput);
  };
  console.log(wordGuess);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <main className="App">
        {showInfo && <Info />}
        <button onClick={toggleInfo} className="button">?</button>
        <h1>WORDLE</h1>
        <Timer />
        <button className="button" onClick={getWords}>
          Click here for New word
        </button>
        <p>Type 5 letter word below! Do not repeat letters </p>

        <input
          maxlength="5"
          type="text"
          placeholder="type 5 letter word here"
          onInput={handleInput}
        />

        <Board word={word} wordGuess={wordGuess} />
      </main>
    </>
  );
};

export default App;
