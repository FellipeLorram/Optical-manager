import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

const variants = {
  animate: {
    rotate: [0, -10, 0, -10, 0],
    transition: {
      duration: 1,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export default function RepairIcon({ animate }) {
  return (
    <>
      {animate ? (
        <motion.svg
          animate="animate"
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
          <motion.path variants={variants} stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.path
            variants={variants}
            d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"
          />
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
          <path
            d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"
          />
        </svg>
      )}
    </>
  );
}

RepairIcon.propTypes = {
  animate: PropTypes.bool.isRequired,
};
