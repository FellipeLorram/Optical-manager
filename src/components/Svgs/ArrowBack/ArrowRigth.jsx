import React from 'react';
import history from '../../../services/history';
import { MotionSvg } from './styled';

const variants = {
  hover: {
    x: [0, 3, 0],
  },
};

export default function Arrow() {
  return (
    <div>
      <MotionSvg
        variants={variants}
        whileHover="hover"
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#fff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="13" y1="18" x2="19" y2="12" />
        <line x1="13" y1="6" x2="19" y2="12" />
      </MotionSvg>
    </div>
  );
}
