import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LifeSoFar from './components/LifeSoFar';
import WordsOfEncouragement from './components/WordsOfEncouragement';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life-so-far" element={<LifeSoFar />} />
          <Route path="/words-of-encouragement" element={<WordsOfEncouragement />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
