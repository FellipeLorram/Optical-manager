import React, { useEffect, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { InputWrapper } from '../../styles/GlobalStyles';
import { Item, LevelSelectContainer } from './styled';

const InputVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.5 } },
  exit: { opacity: 0 },
};

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

export default function LevelConfirm({
  level,
  text,
  setText,
  setSellerName,
  sellerName,
  names,
}) {
  const [animateLabel, setAnimateLabel] = useState(false);
  const handleBlur = () => {
    if (!text) setAnimateLabel(false);
  };
  const handleChange = (value) => {
    setText(value);
  };

  return (
    <AnimatePresence>
      {level === 'ADMINISTRADOR' && (
        <InputWrapper
          variants={InputVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          valid
          animateLabel={animateLabel}
        >
          <div className="label">
            SENHA DE ADMINISTRADOR
          </div>
          <input
            value={text}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            onFocus={() => setAnimateLabel(true)}
            type="password"
          />
        </InputWrapper>
      )}
      {level === 'VENDEDOR' && (
        <SelectNames
          names={names}
          sellerName={sellerName}
          setSellerName={setSellerName}
        />
      )}
      {level === 'OPTOMETRISTA' && (
        <>
        </>
      )}
    </AnimatePresence>
  );
}

function SelectNames({
  setSellerName,
  sellerName,
  names,
}) {
  const [open, setOpen] = useState(false);
  const [namestoMap, setNamestoMap] = useState([]);

  useEffect(() => {
    setNamestoMap((arr) => {
      const editArr = [...names];
      editArr.splice(editArr.indexOf(sellerName), 1);
      return editArr;
    });
  }, [names, sellerName]);

  const handleClickSelect = (text) => {
    setSellerName(text);
    setOpen(false);
  };

  return (
    <AnimateSharedLayout>
      <LevelSelectContainer
        variants={InputVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        layout
        open={open}
      >
        <Item
          open={open}
          selected
          layout
          key={0}
          onClick={() => setOpen(!open)}
        >
          {sellerName}
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
              {namestoMap.map((name) => (
                <Item
                  onClick={() => handleClickSelect(name)}
                  key={name}
                >
                  {name}
                </Item>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </LevelSelectContainer>
    </AnimateSharedLayout>
  );
}

SelectNames.defaultProps = {
  sellerName: '',
};

LevelConfirm.defaultProps = {
  sellerName: '',
};

SelectNames.propTypes = {
  names: PropTypes.array.isRequired,
  sellerName: PropTypes.string,
  setSellerName: PropTypes.func.isRequired,
};

LevelConfirm.propTypes = {
  names: PropTypes.array.isRequired,
  sellerName: PropTypes.string,
  setSellerName: PropTypes.func.isRequired,
  level: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
