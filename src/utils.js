import { sampleSize } from 'lodash';

export const getRandomIcons = (icons, count) => {
  return sampleSize(icons, count);
};

export const getRandomPosition = () => {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  return {
    top: `${Math.random() * (vh)}px`, // Assuming 100px as the maximum height of the icon
    left: `${Math.random() * (vw)}px` // Assuming 100px as the maximum width of the icon
  };
};
