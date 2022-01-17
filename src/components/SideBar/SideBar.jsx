import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { Container } from './styled';
import SideLink from './SideBarLink';
import Logo from '../Svgs/Logo';
import MobileNavBar from '../MobileNavBar';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.1 } },
  exit: { opacity: 0 },
};

export default function SideBar() {
  const [links, setLinks] = useState([]);
  const [widthScreen] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(true);
  const level = useSelector((state) => state.auth.level);

  useEffect(() => {
    if (widthScreen < 768) setMenuOpen(false);
    if (level >= 1) {
      setLinks(
        [
          { text: 'HOME', to: '/', icon: 'home' },
          { text: 'CLIENTES', to: '/clients', icon: 'people' },
          { text: 'VENDAS', to: '/sells', icon: 'storefront' },
          { text: 'EXAMES', to: '/exams', icon: 'description' },
          { text: 'CONSERTOS', to: '/repairs', icon: 'handyman' },
          { text: 'ESCRITÓRIO', to: '/officce', icon: 'print' },
          { text: 'CONFIGURAÇÕES', to: '/configs', icon: 'tune' },
        ],
      );
    } else if (level < 1) {
      setLinks(
        [
          { text: 'EXAMES', to: '/exams', icon: 'description' },
        ],
      );
    }
  }, [level, widthScreen]);

  const handleMenuClick = () => {
    // if (widthScreen < 1068) return;
    setMenuOpen(!menuOpen);
  };

  return (
    <Container
      open={menuOpen}
    >
      <MobileNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="header">
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="LOGO"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="LOGO"
            >
              <Logo />
            </motion.div>
          )}
          <div
            tabIndex={0}
            role="button"
            onKeyUp={handleMenuClick}
            onClick={handleMenuClick}
            className="toggle--container"
          >
            {menuOpen ? (
              <motion.span
                key="menuOpen"
                variants={variants}
                initial="initial"
                animate="animate"
                className="material-icons-outlined"
              >
                {widthScreen > 768 ? 'menu_open' : 'close'}
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                variants={variants}
                initial="initial"
                animate="animate"
                className="material-icons-outlined"
              >
                menu
              </motion.span>
            )}
          </div>
        </AnimatePresence>
      </div>
      <div className="body">
        {links.map((link) => (
          <SideLink
            setMenuOpen={setMenuOpen}
            key={link.text}
            open={menuOpen}
            text={link.text}
            to={link.to}
            icon={link.icon}
          />
        ))}
      </div>
    </Container>
  );
}
