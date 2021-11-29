import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper } from '../../styles/GlobalStyles';

export default function Input({
  text,
  setText,
  label,
  type,
  valid,
  setisValidEmail,
}) {
  const [animateLabel, setAnimateLabel] = useState(false);
  const handleBlur = () => {
    if (!text) setAnimateLabel(false);
  };
  const handleChange = (value) => {
    setText(value);
    setisValidEmail(true);
  };

  return (
    <InputWrapper
      valid={valid}
      animateLabel={animateLabel}
    >
      <div className="label">
        <span>{label}</span>
        {!valid && (
          <span className="invalid">INVALIDO</span>
        )}
      </div>
      <input
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        onFocus={() => setAnimateLabel(true)}
        type={type}
      />
    </InputWrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setisValidEmail: PropTypes.func.isRequired,
  setText: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};
