import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper } from '../GlobalStyles';

export default function TextArea({
  label, text, type, valid, setText, inputBlock,
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
      <textarea
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

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  inputBlock: PropTypes.bool.isRequired,
  setText: PropTypes.func.isRequired,
};
