import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputWrapperSmall } from './styled';

export default function InputSign({
  label, text, type, valid, setText, setValidText, inputBlock, sign, setSign, cil,
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

  const handleButtonClick = () => {
    if (inputBlock) return;
    if (cil) return;
    if (sign === '+') setSign('-');
    else setSign('+');
  };

  return (
    <InputWrapperSmall
      valid={valid}
      animateLabel={animateLabel}
      button
    >
      <button onClick={handleButtonClick} type="button">{sign}</button>
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
InputSign.defaultProps = {
  inputBlock: false,
  cil: false,
  setValidText: () => 1,
  setSign: () => 1,
};
InputSign.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sign: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  cil: PropTypes.bool,
  inputBlock: PropTypes.bool,
  setText: PropTypes.func.isRequired,
  setValidText: PropTypes.func,
  setSign: PropTypes.func,
};
