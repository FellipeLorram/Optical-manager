import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

const draw = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0.5 + i * 0.5;
    return {
      scaleX: 1,
      opacity: 1,
      transition: {
        scaleX: {
          delay,
          type: 'spring',
          duration: 1,
          bounce: 0,
        },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Article({ animate }) {
  return (
    <AnimatePresence>
      {animate ? (
        <motion.svg
          initial="hidden"
          animate="visible"
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
          <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <motion.line variants={draw} custom={-1} x1="9" y1="7" x2="15" y2="7" />
          <motion.line variants={draw} custom={-0.5} x1="9" y1="11" x2="15" y2="11" />
          <motion.line variants={draw} custom={0} x1="9" y1="15" x2="13" y2="15" />
        </motion.svg>

      ) : (
        <svg
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
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <line x1="9" y1="11" x2="15" y2="11" />
          <line x1="9" y1="15" x2="13" y2="15" />
        </svg>

      )}
    </AnimatePresence>
  );
}

Article.propTypes = {
  animate: PropTypes.bool.isRequired,
};
