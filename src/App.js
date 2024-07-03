import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Home from './components/Home';
import LifeSoFar from './components/LifeSoFar';
import WordsOfEncouragement from './components/WordsOfEncouragement';
import Game from './components/Game';
import ParallaxLayer from './components/ParallaxLayer';
import { getRandomIcons, getRandomPosition } from './utils';

function App() {
  const [selectedIcons, setSelectedIcons] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const allIcons = importAll(require.context('./assets/icons', false, /\.(png|jpe?g|svg)$/));

    const iconsWithSpeed = allIcons.map((icon, index) => ({
      src: icon,
      speed: (index % 5) * 2 - 4 // Assign a speed based on index for variety
    }));

    const randomIcons = getRandomIcons(iconsWithSpeed, 60); // Select 5 random icons
    setSelectedIcons(randomIcons);
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <ParallaxProvider>
          <div style={{ height: '200vh', position: 'relative' }}>
            {selectedIcons.map((icon, index) => (
              <ParallaxLayer
                key={index}
                src={icon.src}
                speed={icon.speed}
                style={{
                  position: 'absolute',
                  ...getRandomPosition()
                }}
              />
            ))}
          </div>
        </ParallaxProvider>
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
