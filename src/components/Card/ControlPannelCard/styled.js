import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1rem;
  border: 1px solid transparent;
  background: #242731;
  box-shadow: 0 15px 35px rgb(0 0 0 / 7%);
  border-radius: 12px;
  cursor: pointer;
  transition: all .15s ease-in-out;
  min-width: 300px;
  min-height: 240px;
  gap: 1rem;

  .content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 0 .5rem 0;
    gap: 2rem;
    color: var(--font-color);
    border-bottom: 1px solid rgba(228,228,228,0.1);
  }

  &:hover{
    border: 1px solid #355DFF;
  }
  @media screen and (max-width:768px) {
  }
`;
