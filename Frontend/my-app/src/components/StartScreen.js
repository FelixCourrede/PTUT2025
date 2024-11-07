import React from 'react';
import './StartScreen.css';

const StartScreen = () => {
  return (

        <div className="container">
          <button className="image-button">
            <img src="/images/info.png" alt="gameRules" className="info" />
          </button>
          <img src="/images/logoJeu.png" alt="lotus" className="logo" />
          
          <div className='startGame'>
            <img src="/images/lotus.png" alt="lotus" className="image" />
            <button className="center-button">Commencer une partie</button>
            <img src="/images/lotus.png" alt="lotus" className="image" />
          </div>
        </div>
    );
};


export default StartScreen;
