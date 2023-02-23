import "./GamevsBot.css"
import React, { useEffect, useState } from 'react';

const options = ['Rock', 'Paper', 'Scissors'];

const AgainstPlayer = () => {
const [playerChoice, setPlayerChoice] = useState(null);
const [player2Choice, setPlayer2Choice] = useState(null);
const [result, setResult] = useState(null);
const [show, setShow] = useState(true)
const [show1, setShow1] = useState(false)
const [visible, setVisible] = useState(false)


const handlePlayerChoice = (option) => {
    setPlayerChoice(option);
};

const handleReset = () => {
    setPlayerChoice(null);
    setPlayer2Choice(null);
    setResult(null);
};

const handlePlayer2Choice = (option) => {
    setPlayer2Choice(option);
};

useEffect(() => {
    if (playerChoice && player2Choice) {
    if (playerChoice === player2Choice) {
        setResult('Tie!');
    } else if (
        (playerChoice === 'Rock' && player2Choice === 'Scissors') 
        || (playerChoice === 'Paper' && player2Choice === 'Rock') 
        || (playerChoice === 'Scissors' && player2Choice === 'Paper')
    ) {
        setResult('You win!');
    } else {
        setResult('You lose!');
    }
    }
}, [playerChoice, player2Choice]);

return (
    <div>
        <h1>Rock Paper Scissors Game</h1>
        <div className='box'>
            <h2>Player</h2>
            <p>{playerChoice}</p>
            {options.map((option) => (
            <button className={show ? "show" : "hidden" } key={option} onClick={() => {
                setShow(!show)
                setShow1(!show1)
                handlePlayerChoice(option)}}>
                {option}
            </button>
            ))}
        </div>
        <div className='box custom'>
            <h2>Player2</h2>
            <p>{player2Choice}</p>
            {options.map((option) => (
            <button className={show1 ? "show1" : "hidden1" } key={option} onClick={() => {
                setShow1(!show1)
                setVisible(!visible)
            handlePlayer2Choice(option)}}>
                {option}
            </button>
            ))}
        </div>
        <div>
            <button className={visible ? "" : "hidden"} onClick={() => {
                setVisible(!visible)
                setShow(!show)
                handleReset()}}>Reset</button>
        </div>
        <div>
            <p>{result}</p>
        </div>
        </div>
    );
};

export default AgainstPlayer;