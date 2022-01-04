import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper } from './styled';

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
    setValidText(true);
  };

  return (
    <InputWrapper
      small
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
    </InputWrapper>
  );
}

Input.defaultProps = {
  setValidText: () => 1,
  inputBlock: false,
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
