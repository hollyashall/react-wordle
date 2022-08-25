import "./App.scss";
import { useState } from "react";
import React from 'react'
import Board from "./components/Board/Board";
import Word from "./containers/Word";

const App = () => {

const [words, setWords] =useState("")

const getWords =()=> {
  
  fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setWords(jsonResponse);
      });
  };


console.log(words);



  return (
    <>
    <main className="App">
<h1>WORDLE</h1>
<button onClick={getWords}>Click here for word</button>
<Word word={words}/>
<Board  word={words}/>
    </main>
    </>
  )
}

export default App

