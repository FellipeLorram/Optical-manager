import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

export default function Select({
  level,
  setLevels,
  currentLevelsArr,
  setCurrentLevelsArr,
  edit,
  setOriginalCurrentText,
}) {
  const [open, setOpen] = useState(false);

  const handleClickLoginContainer = () => {
    if (!edit) setOpen(!open);
  };

  const handleItemClick = (text, index) => {
    const currentsearchType = level;
    setLevels(text);
    setOriginalCurrentText(text);
    setCurrentLevelsArr((arr) => {
      const newArr = arr;
      newArr[index] = currentsearchType;
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
                onClick={() => handleItemClick(currentLevelsArr[0], 0)}
              >
                {currentLevelsArr[0]}
              </Item>
              {currentLevelsArr[1] && (
                <Item
                  onClick={() => handleItemClick(currentLevelsArr[1], 1)}
                >
                  {currentLevelsArr[1]}
                </Item>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </LevelSelectContainer>
    </AnimateSharedLayout>
  );
}

Select.defaultProps = {
  edit: false,
  setOriginalCurrentText: (text) => text,
};

Select.propTypes = {
  level: PropTypes.string.isRequired,
  setLevels: PropTypes.func.isRequired,
  currentLevelsArr: PropTypes.array.isRequired,
  setCurrentLevelsArr: PropTypes.func.isRequired,
  setOriginalCurrentText: PropTypes.func,
  edit: PropTypes.bool,
};
