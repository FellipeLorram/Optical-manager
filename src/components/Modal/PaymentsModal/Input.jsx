import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputWrapperSmall } from '../../../styles/GlobalStyles';

export default function Input({
  label, text, type, valid, setText, setValidText, inputBlock,
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
    if (!valid) setValidText(true);
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
        min="0"
      />
    </InputWrapperSmall>
  );
}
Input.defaultProps = {
  inputBlock: false,
  setValidText: () => 1,
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  inputBlock: PropTypes.bool,
  setText: PropTypes.func.isRequired,
  setValidText: PropTypes.func,
};
