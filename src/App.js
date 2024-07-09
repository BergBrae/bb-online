import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Home from './components/Home';
import LifeSoFar from './components/LifeSoFar';
import WordsOfEncouragement from './components/WordsOfEncouragement';
import Game from './components/Game';
import ParallaxLayer from './components/ParallaxLayer';

function App() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    // Assuming the background image is located in the assets folder
    const background = require('./assets/background-tall.png');
    setBackgroundImage(background);
  }, []);

  return (
    <Router>
      <div>
        <ParallaxProvider>
          <div style={{ position: 'relative', height: '200vh' }}>
            {backgroundImage && (
              <ParallaxLayer
                src={backgroundImage}
                speed={-10} // Negative value to scroll slower
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
            )}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ position: 'sticky', top: 0, zIndex: 20, backgroundColor: 'white' }}>
                <Header />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/life-so-far" element={<LifeSoFar />} />
                <Route path="/words-of-encouragement" element={<WordsOfEncouragement />} />
                <Route path="/game" element={<Game />} />
              </Routes>
            </div>
          </div>
        </ParallaxProvider>
      </div>
    </Router>
  );
}

export default App;
