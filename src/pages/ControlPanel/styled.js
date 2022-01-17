import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonsContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  font-family: var(--main-font);
  overflow-x: auto;
  margin-bottom: 2rem;
  @media screen and (max-width:768px) {
    gap: .5rem;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-width: 100%;
  position: relative;

  .header{
    padding: 1rem;
    font-size: 1rem;
    width: 100%;
    border-bottom: 1px solid rgba(228, 228, 228, 0.1);
  }
  @media screen and (max-width:768px) {
    .header{
      padding: .5rem;
      font-size: 1rem;
    }
  }
`;

export const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem 0rem;
  overflow-x: auto;
  margin-bottom: 1rem;

  .no-data{
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    color: #808191;
  }
    /* width */
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(228, 228, 228, 0.1);
    border-radius: 100px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(228, 228, 228, 0.4);
    border-radius: 100px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(228, 228, 228, 0.6);
  }

`;
