import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

const backPeopleVariants = {
  animate: {
    x: -7,
    scale: 0.9,
    opacity: 0.7,
    transition: {
      duration: 0.2,
      delay: 0,
    },
  },
  exit: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0,
    },
  },
};
const Frontvariants = {
  animate: {
    x: 5,
    transition: {
      duration: 0.2,
      delay: 0,
    },
  },
};
const plusVariants = {
  animate: {
    x: 5,
    transition: {
      duration: 0.2,
      delay: 0,
    },
  },
};

export default function PersonAdd({ animate }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {animate ? (
        <motion.svg animate="animate" exit="exit" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <motion.path variants={Frontvariants} d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <motion.circle variants={Frontvariants} cx="9" cy="7" r="4" />
          <motion.path variants={backPeopleVariants} d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <motion.circle variants={backPeopleVariants} cx="9" cy="7" r="4" />
          <motion.path variants={plusVariants} d="M16 11h6m-3 -3v6" />
        </motion.svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 11h6m-3 -3v6" />
        </svg>
      )}
    </AnimatePresence>
  );
}

PersonAdd.propTypes = {
  animate: PropTypes.bool.isRequired,
};
