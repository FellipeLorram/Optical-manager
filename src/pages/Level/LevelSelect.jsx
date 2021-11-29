import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../styles/GlobalStyles';
import {
  Item,
  LevelSelectContainer,
} from './styled';

const levelVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

export default function LevelSelect({
  level,
  setLevel,
  levels,
  setLevels,
}) {
  const [open, setOpen] = useState(false);

  const handleClickLoginContainer = () => {
    setOpen(!open);
  };

  const handleItemClick = (text, index) => {
    const currentLevel = level;
    setLevel(text);
    setLevels((arr) => {
      const newArr = arr;
      newArr[index] = currentLevel;
      return newArr;
    });
    setOpen(!open);
  };

  return (
    <AnimateSharedLayout>
      <LevelSelectContainer
        layout
        open={open}
      >
        <Item
          open={open}
          layout
          onClick={handleClickLoginContainer}
          key={0}
          selected
        >
          {level}
          <span className="material-icons-outlined">
            expand_more
          </span>
        </Item>
        <AnimatePresence>
          {open && (
            <motion.div
              layout
              variants={levelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="body--items"
            >
              <Item
                onClick={() => handleItemClick(levels[0], 0)}
              >
                {levels[0]}
              </Item>
              {levels[1] && (
                <Item
                  onClick={() => handleItemClick(levels[1], 1)}
                >
                  {levels[1]}
                </Item>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </LevelSelectContainer>
    </AnimateSharedLayout>
  );
}

LevelSelect.propTypes = {
  level: PropTypes.string.isRequired,
  setLevel: PropTypes.func.isRequired,
  levels: PropTypes.array.isRequired,
  setLevels: PropTypes.func.isRequired,
};
