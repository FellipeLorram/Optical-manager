import { motion } from 'framer-motion';
import React from 'react';

const LoaderVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

const outCircleVariants = {
  animate: {
    rotate: 1440,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    },
  },
};

const inCircleVariants = {
  animate: {
    rotate: -1440,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    },
  },
};

export default function Loader() {
  return (
    <motion.svg
      variants={LoaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Loader">
        <g id="OutCircle" filter="url(#filter0_d_1:6)">
          <motion.path
            variants={outCircleVariants}
            animate="animate"
            d="M80.1258 40C82.2655 40 84.0195 38.2614 83.8125 36.1317C83.1766 29.5867 80.9342 23.2779 77.2588 17.7772C72.8635 11.1992 66.6164 6.07232 59.3073 3.04482C51.9983 0.0173133 43.9556 -0.77482 36.1964 0.768589C28.4371 2.312 21.3098 6.12163 15.7157 11.7157C10.1216 17.3098 6.312 24.4371 4.76859 32.1964C3.22518 39.9556 4.01731 47.9983 7.04482 55.3073C10.0723 62.6164 15.1992 68.8635 21.7772 73.2588C27.2779 76.9342 33.5867 79.1766 40.1317 79.8125C42.2614 80.0195 44 78.2655 44 76.1258V76.1258C44 73.9861 42.2592 72.2756 40.135 72.0192C35.125 71.4144 30.3078 69.6398 26.082 66.8162C20.7782 63.2724 16.6445 58.2354 14.2034 52.3421C11.7624 46.4489 11.1237 39.9642 12.3681 33.708C13.6126 27.4518 16.6842 21.7052 21.1947 17.1947C25.7052 12.6842 31.4518 9.61256 37.708 8.36812C43.9642 7.12369 50.4489 7.76238 56.3421 10.2034C62.2354 12.6445 67.2724 16.7782 70.8162 22.082C73.6398 26.3078 75.4144 31.125 76.0192 36.135C76.2756 38.2592 77.9861 40 80.1258 40V40Z"
            fill="#355DFF"
          />
        </g>
        <g id="InCrcle" filter="url(#filter1_d_1:6)">
          <motion.path
            variants={inCircleVariants}
            animate="animate"
            d="M17.0036 40.0093C15.3988 40.0041 14.0791 41.3038 14.2291 42.9015C14.69 47.8118 16.3563 52.5489 19.0994 56.6834C22.3797 61.6276 27.0525 65.488 32.5269 67.7765C38.0012 70.0651 44.0312 70.6788 49.8544 69.5403C55.6776 68.4017 61.0324 65.562 65.2416 61.3801C69.4509 57.1983 72.3255 51.8621 73.5021 46.0465C74.6786 40.2309 74.1042 34.197 71.8515 28.7078C69.5988 23.2187 65.7689 18.5208 60.8462 15.2082C56.7297 12.4382 52.0036 10.741 47.0965 10.248C45.4997 10.0876 44.1915 11.3988 44.1862 13.0036V13.0036C44.181 14.6083 45.4824 15.8955 47.0749 16.093C50.8309 16.5588 54.4395 17.9016 57.6019 20.0296C61.571 22.7005 64.659 26.4883 66.4753 30.9142C68.2917 35.34 68.7548 40.2051 67.8062 44.8942C66.8575 49.5833 64.5397 53.8857 61.1458 57.2575C57.752 60.6293 53.4345 62.919 48.7393 63.837C44.0441 64.755 39.1822 64.2601 34.7683 62.4149C30.3544 60.5697 26.5867 57.457 23.9419 53.4706C21.8345 50.2943 20.5153 46.6771 20.0741 42.9181C19.887 41.3243 18.6083 40.0146 17.0036 40.0093V40.0093Z"
            fill="#355DFF"
          />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_1:6" x="-1.52588e-05" y="-1.90735e-05" width="87.8292" height="87.8292" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1:6" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1:6" result="shape" />
        </filter>
        <filter id="filter1_d_1:6" x="10.2174" y="10.2347" width="67.8804" height="67.8631" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1:6" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1:6" result="shape" />
        </filter>
      </defs>
    </motion.svg>

  );
}
