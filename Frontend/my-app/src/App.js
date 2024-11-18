import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import Info from './components/Info';
import ChooseHospital from './components/ChooseHospital';
import React from 'react';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartScreen />} /> {/* Route par défaut */}
          <Route path="/info" element={<Info />} /> {/* Route vers Info */}
          <Route path="/choosehospital" element={<ChooseHospital />} /> {/* Route vers Info */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
