import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputWrapperSmall } from '../../../styles/GlobalStyles';

export default function Input({
  label, text, type, valid, setText, func, inputBlock,
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
    func();
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
        type={type}
        disabled={inputBlock}
      />
    </InputWrapperSmall>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  inputBlock: PropTypes.bool.isRequired,
  setText: PropTypes.func.isRequired,
  func: PropTypes.func.isRequired,
};
