import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartScreen.css';

const StartScreen = () => {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate('/info');  // Navigation vers la page Info
  }
  const handleHospitalClick = () => {
    navigate('/hospital');  // Navigation vers la page Info
  };

  return (
    <div className="container">
      <button className="image-button" onClick={handleInfoClick}>
        <img src="/images/info.png" alt="gameRules" />
      </button>
      <img src="/images/logoJeu.png" alt="lotus" className="logo" />
      <div className="startGame">
        <img src="/images/lotus.png" alt="lotus" className="image" />
        <button className="center-button" onClick={handleHospitalClick}>Commencer une partie</button>
        <img src="/images/lotus.png" alt="lotus" className="image" />
      </div>
    </div>
  );
};

export default StartScreen;
