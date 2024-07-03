import { sampleSize } from 'lodash';

export const getRandomIcons = (icons, count) => {
  return sampleSize(icons, count);
};

export const getRandomPosition = () => {
  return {
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`
  };
};
