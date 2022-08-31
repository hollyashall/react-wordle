import "./App.scss";
import { useState } from "react";
import React from "react";
import Board from "./components/Board/Board";
import Word from "./containers/Word";

const App = () => {
  const [word, setWords] = useState("");
  const [wordGuess, setWordGuess] = useState([]);

  const getWords = () => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setWords(jsonResponse);
      });
  };

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setWordGuess(cleanInput);

  

  };
  console.log(wordGuess);

  return (
    <>
      <main className="App">
        <h1>WORDLE</h1>
        <button onClick={getWords}>Click here for word</button>
        <p>Type word below! </p>

        <input
        maxlength="5"
          type="text"
          placeholder="type 5 letter word here"
          onInput={handleInput}
          
        />

        <Word word={word} />
        <Board word={word} wordGuess={wordGuess} />
      </main>
    </>
  );
};

export default App;
