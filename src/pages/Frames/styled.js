import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FrameContainer = styled(motion.div)`
  width: 100%;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  background: var(--card-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all .1s ease-in-out;

  .info--container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: .5rem;
    gap: 1rem;
    width: 100%;
    border-bottom: 1px solid rgba(228,228,228,0.1)
  }

  .label{
    color: #808191;
    font-size: .8rem;
  }
  .info{
    color: var(--font-color);
    font-size: 1.2rem;
  }

  &:hover{
    border: 1px solid #355DFF;
  }
`;
