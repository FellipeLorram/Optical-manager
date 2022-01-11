import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;

  .wrapper{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  @media screen and (max-width:768px) {
    flex-direction: column;
  }
`;

export const NewClientContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  @media screen and (max-width:768px) {
    flex-direction: column;
  }
`;

export const LevelSelectContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${(props) => props.open ? '#355DFF' : 'rgba(228, 228, 228, 0.1)'};
  width: 20%;
  background: var(--input-bg-color);
  height: 60px;
  font-size: .8rem;
  color: var(--font-color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover{
    border-color: #355DFF;
  }
  @media screen and (max-width:768px) {
    width: 100%;
  }

`;
