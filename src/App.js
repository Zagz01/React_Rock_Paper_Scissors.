import React, { useState } from 'react';
import './App.css';
import AgainstComputer from './component/gamevsBot/GamevsBot';
import AgainstPlayer from './component/GamevsPlayer/GamevsPlayer';

function App() {
  const [againstComputer, setAgainstComputer] = useState(false);
  const [againstPlayer, setAgainstPlayer] = useState(false);

  return (
          <div className="App">
            <h1>Rock Paper Scissors Game</h1>
            <span>Put your browser screen at full screen for a more immersive gameplay</span>
            <>
            {
              !againstPlayer && !againstComputer ? (
                <div>
                  <button onClick={() => {
                    setAgainstPlayer(true);
                    setAgainstComputer(false);
                  }}>
                    Play against a player
                  </button>
                  <button onClick={() => {
                    setAgainstComputer(true);
                    setAgainstPlayer(false);
                  }}>
                    Play against the computer
                  </button>
                </div>
              ) : againstPlayer ? (
                  <button onClick={() => {
                    setAgainstComputer(true);
                    setAgainstPlayer(false);
                  }}>
                    Play against the computer
                  </button>
              ) : (
                  <button onClick={() => {
                    setAgainstPlayer(true);
                    setAgainstComputer(false);
                  }}>
                    Play against a player
                  </button>
                )
              }          
        
              </>
            {againstComputer ? <AgainstComputer /> : "" }
            {againstPlayer ? <AgainstPlayer/> : ""}
            <div>
            {
            againstPlayer || againstComputer ? (
              <>
              <button onClick={() => {
                setAgainstComputer(false)
                setAgainstPlayer(false)
              }}>
                Home Page
              </button>
            </>
            ) : (
              <div>
              </div>
            )
          }
          </div>
      </div>
  );
}

export default App;
