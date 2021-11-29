import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  border: 1px solid rgba(228, 228, 228, 0.1);
  border-radius: 12px;
  background: var(--card-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
  color: var(--font-color);
  gap: 2rem;
  margin-top: 1rem;

  .header, .button--container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 3rem;
  }
  .button--container{
    gap: 1rem;
  }
  @media screen and (max-width:768px) {
    padding: 1.5rem 0;
    .header{
      padding: 0 1rem;
      gap: 2rem;
      justify-content: center;
    }
    .button--container{
      flex-direction: column;
      align-items: flex-start;
      padding-left: 1rem;
    }
  }

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
    font-size: 1rem;
  }
`;
