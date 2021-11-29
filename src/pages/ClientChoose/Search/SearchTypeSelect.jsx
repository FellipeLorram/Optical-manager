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

export default function SearchTypeSelect({
  searchType,
  setSearchType,
  types,
  setTypes,
}) {
  const [open, setOpen] = useState(false);

  const handleClickLoginContainer = () => {
    setOpen(!open);
  };

  const handleItemClick = (text, index) => {
    const currentsearchType = searchType;
    setSearchType(text);
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
          {searchType}
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
              key="body"
            >
              <Item
                key="item1"
                onClick={() => handleItemClick(types[0], 0)}
              >
                {types[0]}
              </Item>
              {types[1] && (
                <Item
                  key="item2"
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

SearchTypeSelect.propTypes = {
  searchType: PropTypes.string.isRequired,
  setSearchType: PropTypes.func.isRequired,
  types: PropTypes.array.isRequired,
  setTypes: PropTypes.func.isRequired,
};
