import './App.css'
import WordleBoard from './components/WordleBoard';
import WordleKeyBoard from './components/WordleKeyBoard'; 
import React, { useState, createContext, useEffect } from "react";
import { boardD, generateCorrectWord, generateWordSet } from './Words';

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(boardD);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0 });
  const [currWord, setCurrWord] = useState('');
  const [wordSet, setWordset] = useState(new Set())
  const [correctWord, setCorrectWord] = useState('')

  // const gameWord = "Chuck";

  useEffect (() => {
    generateWordSet().then((words) => {
      setWordset(words.wordSet);
      generateCorrectWord().then(word => {
        setCorrectWord(word.correctWord)
      })
    });
  }, [])

  useEffect(() => {
    console.log(currAttempt)
    console.log(board)
    console.log(currWord)
  }, [currAttempt, board, currWord])

  
  return (
      <div className = 'App'>
        <nav>
        <h1>Wordle</h1>
        </nav>
          <AppContext.Provider value = {{ board, setBoard, currAttempt, setCurrAttempt, correctWord, currWord, setCurrWord }}>
            <div className='game'>
              <WordleBoard/>
              <WordleKeyBoard/>
            </div>
          </AppContext.Provider>
      </div>
  )
}

export default App
