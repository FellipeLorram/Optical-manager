import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { Container } from './styled';
import MobileButton from './MobileButton';
import Logo from '../Svgs/Logo';
import MobileMenuButton from './MobileMenuButton';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.1 } },
  exit: { opacity: 0 },
};

export default function MobileNavBar({ menuOpen, setMenuOpen }) {
  const links = [
    { text: 'PESQUISAR', to: '/search', icon: 'search' },
    { text: 'HOME', to: '/', icon: 'home' },
    { text: 'CLIENTES', to: '/clients', icon: 'people' },
    { text: 'ESCRITÓRIO', to: '/officce', icon: 'print' },
  ];
  return (
    <Container
      open={menuOpen}
    >
      <div className="body">
        <MobileMenuButton
          open={menuOpen}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navigate={false}
        />
        {links.map((link) => (
          <MobileButton
            key={link.text}
            open={menuOpen}
            text={link.text}
            to={link.to}
            icon={link.icon}
            setMenuOpen={setMenuOpen}
          />
        ))}
      </div>
    </Container>
  );
}

MobileNavBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
