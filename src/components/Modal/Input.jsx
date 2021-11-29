import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputWrapperSmall } from '../../styles/GlobalStyles';

export default function Input({
  label, text, valid, setText, setValid,
}) {
  const [animateLabel, setAnimateLabel] = useState(false);

  useEffect(() => {
    if (text) setAnimateLabel(true);
  }, [text]);

  const handleBlur = () => {
    if (!text) setAnimateLabel(false);
  };
  const handleChange = (value) => {
    setText(value);
    setValid(true);
  };

  return (
    <InputWrapperSmall
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
        type="text"
      />
    </InputWrapperSmall>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  setText: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired,
};
