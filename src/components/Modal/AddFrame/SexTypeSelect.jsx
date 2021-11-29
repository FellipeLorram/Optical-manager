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

export default function SexTypeSelect({
  sexType,
  setSexType,
  types,
  setTypes,
  edit,
  setOriginalSex,
}) {
  const [open, setOpen] = useState(false);

  const handleClickLoginContainer = () => {
    if (!edit) setOpen(!open);
  };

  const handleItemClick = (text, index) => {
    const currentsearchType = sexType;
    setSexType(text);
    setOriginalSex(text);
    setTypes((arr) => {
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
          {sexType}
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
                onClick={() => handleItemClick(types[0], 0)}
              >
                {types[0]}
              </Item>
              {types[1] && (
                <Item
                  onClick={() => handleItemClick(types[1], 1)}
                >
                  {types[1]}
                </Item>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </LevelSelectContainer>
    </AnimateSharedLayout>
  );
}

SexTypeSelect.defaultProps = {
  sexType: '',
};

SexTypeSelect.propTypes = {
  sexType: PropTypes.string,
  setSexType: PropTypes.func.isRequired,
  types: PropTypes.array.isRequired,
  setTypes: PropTypes.func.isRequired,
  setOriginalSex: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
};
