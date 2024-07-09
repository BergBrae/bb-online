import React, { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxLayer = ({ src, speed, style }) => {
  const [size, setSize] = useState({ width: 100, height: 100 });
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      setSize({ width: naturalWidth, height: naturalHeight });
    }
  }, [src]);

  return (
    <Parallax speed={speed} style={style}>
      <img
        ref={imgRef}
        src={src}
        alt=""
        style={{
          width: '100%', // Ensure the image fills the width of the container
          height: 'auto', // Maintain aspect ratio
        }}
      />
    </Parallax>
  );
};

export default ParallaxLayer;
