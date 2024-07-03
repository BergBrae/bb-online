import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxLayer = ({ src, speed, style }) => {
  return (
    <Parallax speed={speed} style={style}>
      <img src={src} alt="" style={{ width: '100px', height: '100px' }} />
    </Parallax>
  );
};

export default ParallaxLayer;
