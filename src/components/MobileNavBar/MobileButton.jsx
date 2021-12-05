import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { Slink } from './styled';
import history from '../../services/history';

import { GlobalContext } from '../../contexts';

export default function MobileButton({
  open,
  text,
  to,
  icon,
}) {
  const locationContext = useContext(GlobalContext);
  const active = locationContext.Location === text;

  const handleClickLink = () => {
    history.push(to);
    locationContext.setLocation(text);
  };

  return (
    <Slink
      active={active}
      onClick={handleClickLink}
    >

      <motion.span
        className="material-icons-outlined"
      >
        {icon}
      </motion.span>

      <AnimatePresence>
        <motion.span
          className="text"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </Slink>
  );
}

MobileButton.propTypes = {
  open: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
