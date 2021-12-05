import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { Slink } from './styled';

import { GlobalContext } from '../../contexts';

export default function SideLink({
  open,
  text,
  to,
  icon,
  setMenuOpen,
}) {
  const locationContext = useContext(GlobalContext);
  const active = locationContext.Location === text;

  const handleClickLink = () => {
    if (window.innerWidth < 768) setMenuOpen(false);
    locationContext.setLocation(text);
  };

  return (
    <Slink
      active={active ? 'true' : 'false'}
      onClick={handleClickLink}
      to={to}
    >
      {open ? (
        <motion.span
          className="material-icons-outlined"
        >
          {icon}
        </motion.span>
      )
        : (
          <motion.span
            animate={{ x: 0, scale: 1.3 }}
            className="material-icons-outlined"
          >
            {icon}
          </motion.span>
        )}
      <AnimatePresence>
        {open && (
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
            className="text"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </Slink>
  );
}

SideLink.propTypes = {
  open: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
