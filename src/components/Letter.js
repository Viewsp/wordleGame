import React, {useContext} from 'react';
import { AppContext } from '../App'


function Letter ({ letterPos, attemptValue }) {
    const { board, setBoard, currAttempt, setCurrAttempt, correctWord, currWord, setCurrWord } = useContext(AppContext);
    const letter = board[attemptValue][letterPos];
   // const correct = gameWord[letterPos] === letter;
   // const almost = !correct && letter !== "" && gameWord.includes(letter);

   // const letterState = currentAttempt.attempt > attemptValue && (correct ? 'correct': almost ? 'almost': 'error');

    return(
        <div className= {`letter ${letter.played ? (letter.contains === true ? (letter.rightPosition ? 'rightPosition' : 'notRightPosition') : 'notContains') : ''}`}> {" "} {letter.letter}</div>
    )
}
export default Letter