import "./GamevsPlayer.css"
import React, { useEffect, useState } from 'react';

const options = ['Rock', 'Paper', 'Scissors'];

const AgainstPlayer = () => {
const [playerChoice, setPlayerChoice] = useState(null);
const [player2Choice, setPlayer2Choice] = useState(null);
const [result, setResult] = useState(null);
const [show, setShow] = useState(true)
const [show1, setShow1] = useState(false)
const [visible, setVisible] = useState(false)
const [hide, setHide] = useState(false)
const [hide1, setHide1] = useState(false)
const [button, setButton] = useState(false)
const [button1, setButton1] = useState(false)

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
            setResult(`The player 1 won with ${playerChoice} and the player 2 lost with ${player2Choice}`);
        } else {
            setResult(`The player 2 won with ${player2Choice} and the player 1 lost with ${playerChoice}`);
        }
    }
}, [playerChoice, player2Choice]);

return (
    <div>
        <div className='box'>
            <h2>Player1</h2>
            <div className={hide ? "hide" : "notHide"}>
                <p>{playerChoice}</p>
                {
                    button && hide ? (
                        <button onClick={() => !setHide(!hide)}>
                            show
                        </button>
                    ) : button && !hide ? (
                        <>
                        </>
                    ) : (
                        <>
                        </>
                    )
                }
            </div>
            {options.map((option) => (
            <button className={show ? "show" : "hidden" } key={option} onClick={() => {
                setHide(true)
                setButton(true)
                setShow(!show)
                setShow1(!show1)
                handlePlayerChoice(option)}}>
                {option}
            </button>
            ))}
        </div>
        <div className='box custom'>
            <h2>Player2</h2>
            <div className={hide1 ? "hide1" : "notHide1"}>
            <p>{player2Choice}</p>
                {
                    button1 && hide1 ? (
                        <button onClick={() => !setHide1(!hide1)}>
                            show
                        </button>
                    ) : button1 && !hide1 ? (
                        <>
                        </>
                    ) : (
                        <>
                        </>
                    )
                }
            </div>

            {options.map((option) => (
            <button className={show1 ? "show1" : "hidden1" } key={option} onClick={() => {
                setHide1(true)
                setButton1(true)
                setShow1(!show1)
                setVisible(!visible)
            handlePlayer2Choice(option)}}>
                {option}
            </button>
            ))}
        </div>
        <div>
            <button className={visible ? "" : "hidden"} onClick={() => {
                setButton(false)
                setHide(false)
                setButton1(false)
                setHide1(false)
                setVisible(!visible)
                setShow(!show)
                handleReset()}}>Reset</button>
        </div>
        <div>
            {
                !hide && !hide1 ? (
                    <p>{result}</p>
                ): (
                    <>
                    </>
                )
            }
        </div>
        </div>
    );
};

export default AgainstPlayer;