import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

const Svariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    color: '#3d5t',
    pathLength: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Wvariants = {
  animate: {
    y: [0, -3, 0],
    transition: {
      duration: 0.7,
    },
  },
};

export default function Bag({ animate }) {
  return (
    <AnimatePresence>
      {animate ? (
        <motion.svg variants={Wvariants} animate="animate" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <ellipse cx="16" cy="6" rx="5" ry="3" />
          <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <motion.path variants={Svariants} initial="initial" animate="animate" d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
          <motion.path variants={Svariants} initial="initial" animate="animate" d="M5 15v1m0 -8v1" />
        </motion.svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <ellipse cx="16" cy="6" rx="5" ry="3" />
          <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
          <path d="M5 15v1m0 -8v1" />
          <path d="M5 15v1m0 -8v1" />
        </svg>
      )}
    </AnimatePresence>
  );
}

Bag.propTypes = {
  animate: PropTypes.bool.isRequired,
};
