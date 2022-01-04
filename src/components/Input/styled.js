import { motion } from 'framer-motion';
import styled from 'styled-components';

export const InputWrapper = styled(motion.div)`
width: 100%;
position: relative;

.label{
  position: absolute;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: ${(props) => props.animateLabel ? '25%' : '45%'};
  left: 1.1rem;
  color: #808191;
  font-size: .6rem;
  transition: all .2s ease-in-out;
  font-weight: 700;
  .invalid{
    color: red;
  }
}
input{
  width: 100%;
  padding: 1rem 1rem .2rem 1rem;
  height: ${(props) => props.small ? '60px' : '80px'};
  background: var(--input-bg-color);
  outline: none;
  border-radius: 12px;
  border: ${(props) => props.valid ? '2px solid rgba(228,228,228,0.1)' : '2px solid #d93737'};
  color: var(--font-color);
  font-family: var(--main-font);
  transition: all .2s ease-in-out;
  font-weight: bold;
  font-size: 1rem;

  &:focus{
    border-color: ${(props) => props.valid ? '#355DFF' : '#d93737'};
  }
  @media screen and (max-width:408px) {
    height: 60px;
  }
}
textarea{
  width: 100%;
  padding: 2.5rem 1rem .2rem 1rem;
  height: 80px;
  background: var(--input-bg-color);
  outline: none;
  border-radius: 12px;
  border: ${(props) => props.valid ? '2px solid rgba(228,228,228,0.1)' : '2px solid #d93737'};
  color: var(--font-color);
  font-family: var(--main-font);
  transition: all .2s ease-in-out;
  font-weight: bold;
  font-size: 1rem;
  resize: none;

  &:focus{
    border-color: ${(props) => props.valid ? '#355DFF' : '#d93737'};
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;
