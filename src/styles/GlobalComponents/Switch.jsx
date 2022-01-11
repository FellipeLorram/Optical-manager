import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { HandleContainer, SwitchContainer } from '../GlobalStyles';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default function Switch({
  label,
  isOn,
  setIsOn,
  block,
}) {
  const toggleSwitch = () => !block && setIsOn(!isOn);

  return (
    <SwitchContainer isOn={isOn}>
      <HandleContainer
        isOn={isOn}
        onKeyUp={toggleSwitch}
        onClick={toggleSwitch}
        role="button"
        tabIndex={0}
      >
        <motion.div className="handle" layout transition={spring} />
      </HandleContainer>
      <span>{label}</span>
    </SwitchContainer>
  );
}

Switch.defaultProps = {
  block: false,
};

Switch.propTypes = {
  label: PropTypes.string.isRequired,
  block: PropTypes.bool,
  isOn: PropTypes.bool.isRequired,
  setIsOn: PropTypes.func.isRequired,
};
