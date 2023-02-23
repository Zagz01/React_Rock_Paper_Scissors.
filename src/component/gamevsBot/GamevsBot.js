import React, { useEffect, useState } from 'react';
import "./GamevsBot.css"

const options = ['Rock', 'Paper', 'Scissors'];

const Game = () => {
const [playerChoice, setPlayerChoice] = useState(null);
const [computerChoice, setComputerChoice] = useState(null);
const [result, setResult] = useState(null);
const [visible, setVisible] = useState(true)


const handleReset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
};


const handlePlayerChoice = (option) => {
    setPlayerChoice(option);

    
    let randomIndex = Math.floor(Math.random() * options.length);
    const computerOption = options[randomIndex];
    setComputerChoice(computerOption);

    if (option === computerOption) {
        setResult('Tie!');
        } else if (
            (option === 'Rock' && computerOption === 'Scissors') ||
            (option === 'Paper' && computerOption === 'Rock') ||
            (option === 'Scissors' && computerOption === 'Paper')
        ) {
            setResult(`player won with ${option} and computer lost with ${computerOption}`);
        } else {
            setResult(`The computer won with ${computerOption} and the player lost with ${option}`);
    }
};

useEffect(() => {
    console.log(playerChoice);
    console.log(computerChoice);
    console.log(result);
    console.log("next game");
    console.log("");

}, [playerChoice, computerChoice, result]);


return (
    <div>
    <div className='box'>
        <h2>Player</h2>
        <p>{playerChoice}</p>
                
                {options.map((option) => (
                    <button className={visible ? "show" : "hidden" } key={option} onClick={() => {
                    setVisible(false)
                    handlePlayerChoice(option)}}>
                    {option}
                    </button>
                    ))}
                
            
    </div>
    <div>
        <h2>Computer</h2>
        <p>{computerChoice}</p>
    </div>
    <div>
        <button className={visible ? "hidden" : "true"}  onClick={() =>{
            setVisible(!visible)
            console.log(visible);
            handleReset()}}>Reset</button>
    </div>
    <div>
        <p>{result}</p>
    </div>
    </div>
);
};

export default Game;
