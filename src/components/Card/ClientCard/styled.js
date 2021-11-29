import { motion } from 'framer-motion';
import styled from 'styled-components';

export const InfoContainer = styled(motion.div)`
  width: 100%;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid rgba(228,228,228,0.1);
  border-radius: 12px;
  background: var(--input-bg-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  cursor: pointer;

  .date--container{
    font-size: 1rem;
    width: 100%;
    text-align: right;
  }

  .content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 0 .3rem 0;
    gap: 1rem;
    font-size: .8rem;

    color: var(--font-color);
    border-bottom: 1px solid rgba(228,228,228,0.1);

    .material-icons-outlined{
      font-size: 1rem;
    }
    &:last-of-type {
      border-bottom: none;
    }
  }

  .no-content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 2rem;
  }

`;
