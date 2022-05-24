import React, { useContext, useState } from 'react'
import { AppContext } from '../App';

function Key({ keyVal, bigKey }) {
    const { board, setBoard, currAttempt, setCurrAttempt, correctWord, currWord, setCurrWord } = useContext(AppContext);
    const [wordSet] = useState(new Set())
    const selectLetter = () => {
        if (keyVal == "EN") {
            if (currAttempt.letterPos !== 5) return;
            let currWord = "";
            for (let i = 0; i < 5; i++) {
                currWord += board[currAttempt.attempt][i]
            }

            if (wordSet.has(currWord.toLowerCase())) {
                setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
            } else {
                alert("Word not found");
            }
        } else if (keyVal === "DE") {
            if (currAttempt.letterPos === 0) return;
            const newBoard = [...board];
            newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
            setBoard(newBoard);
            setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
        }
        else {
            console.log(correctWord)
            if (currAttempt.letterPos === 4) {
                let newBoard = [...board];
                newBoard[currAttempt.attempt][currAttempt.letterPos].letter = keyVal;
                let letters = newBoard[currAttempt.attempt]
                letters = letters.map((letter, index) => {
                    letter.played = true
                    const indexContained = []
                    correctWord.split('').map((correctLetter, correctIndex) => {
                        if (correctLetter === letter.letter) {
                            letter.contains = true
                            indexContained.push(correctIndex)
                        }
                    })

                    if (indexContained && indexContained.length) {
                        if (indexContained.includes(index)) {
                            letter.rightPosition = true
                        }
                    }

                    return letter
                })

                newBoard[currAttempt.attempt] = letters

                setBoard(newBoard);
                setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
                setCurrWord(`${currWord}${keyVal}`)
            } else {
                const newBoard = [...board];
                newBoard[currAttempt.attempt][currAttempt.letterPos].letter = keyVal;
                setBoard(newBoard);
                setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
                setCurrWord(`${currWord}${keyVal}`)
            }
        }
    }
    return (<div className='key' id={bigKey && "big"} onClick={selectLetter}>
        {keyVal}
    </div>
    );
}

export default Key; 