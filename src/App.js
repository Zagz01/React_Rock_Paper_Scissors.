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
            <div>
            {
              !againstPlayer && !againstComputer ? (
                <>
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
                </>
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
        
              </div>
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
              <>
              </>
            )
          }
          </div>
      </div>
  );
}

export default App;
