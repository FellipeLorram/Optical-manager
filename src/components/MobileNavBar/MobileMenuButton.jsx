import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { Slink } from './styled';
import history from '../../services/history';

import { GlobalContext } from '../../contexts';

export default function MobileMenuButton({
  menuOpen,
  setMenuOpen,
}) {
  const handleClickLink = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Slink
      onClick={handleClickLink}
    >

      <motion.span
        className="material-icons-outlined"
      >
        {menuOpen ? 'menu_open' : 'menu'}
      </motion.span>

      <AnimatePresence>
        <motion.span
          className="text"
        >
          MENU
        </motion.span>
      </AnimatePresence>
    </Slink>
  );
}

MobileMenuButton.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
