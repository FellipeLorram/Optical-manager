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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  border-radius: 12px;
  cursor: pointer;
  transition: all .15s ease-in-out;
  min-width: 300px;
  min-height: 240px;
  gap: 1rem;

  .header, .content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 0 .5rem 0;
    gap: 2rem;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(228,228,228,0.1);
    color: var(--font-color);
  }

  .content{
    padding: 0 0 .3rem 0;
    gap: 1rem;
    font-size: 1rem;
    color: var(--font-color);
    &:last-of-type {
      border-bottom: none;
    }
  }

  &:hover{
    border: 1px solid #355DFF;
  }
  @media screen and (max-width:768px) {
  }
`;
