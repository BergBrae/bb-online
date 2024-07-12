import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LifeSoFar from './components/LifeSoFar';
import BirthdayWishes from './components/BirthdayWishes';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    // Assuming the background image is located in the assets folder
    const background = require('./assets/background-tall.png');
    setBackgroundImage(background);
  }, []);

  return (
    <Router>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'fixed', width: '100%', height: '100%' }}>
        <div style={{ position: 'relative', zIndex: 10, height: '100vh', overflowY: 'auto' }}>
          <div style={{ position: 'sticky', top: 0, zIndex: 20, backgroundColor: 'white' }}>
            <Analytics />
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life-so-far" element={<LifeSoFar />} />
            <Route path="/birthday-wishes" element={<BirthdayWishes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
