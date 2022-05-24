import wordBank from './wordleBank.txt'

const obj = {letter: '', played: false, contains: false, rightPosition: false}

export const boardD = [
    [JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj))],
    [JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj))],
    [JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj))],
    [JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj))],
    [JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj))],
    [JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj)), JSON.parse(JSON.stringify(obj))],
];


export const generateWordSet = async() => {
    let wordSet;
    await fetch(wordBank).then((response) => response.text()).then((result) => {
        const wordArr = result.split("\n");
        wordSet = new Set(wordArr);
    });
    return { wordSet };
}

export const generateCorrectWord = async() => {
    let correctWord;
    await fetch(wordBank).then((response) => response.text()).then((result) => {
        const wordArr = result.split("\n");
        correctWord = wordArr[Math.floor(Math.random()*wordArr.length)];
        console.log(correctWord)
    });
    return { correctWord };
}