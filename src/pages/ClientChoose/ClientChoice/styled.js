import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  border: 1px solid rgba(228, 228, 228, 0.1);
  border-radius: 12px;
  background: var(--card-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.5rem;
  color: var(--font-color);
  gap: 1.5rem;
  .header{
    width: 100%;
    font-size: 1.2rem;
    text-align: left;
    padding: .5rem;
  }

  @media screen and (max-width:408px) {
    gap: 2rem;
  }
`;

export const ChoiceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1rem;
  padding: .5rem;
`;

export const CurrentText = styled.header`
  font-size: 1rem;
  color: ${(props) => props.current ? 'var(--font-color)' : '#808191'};
  cursor: pointer;
  transition: all .1s ease-in-out;
  &:hover{
    color: var(--font-color);
  }
  @media screen and (max-width:768px) {
    font-size: .8rem;
  }
`;
