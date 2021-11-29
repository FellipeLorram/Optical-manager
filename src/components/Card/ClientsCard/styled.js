import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 0 .5rem 0;
    gap: 2rem;
    font-size: 1.2rem;

    color: var(--font-color);
  }

  .choice--container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: .75rem;
    gap: 1rem;
    border-bottom: 1px solid rgba(228,228,228,0.1);
    padding: 0 0 .3rem 0;
  }


  &:hover{
    border: 1px solid #355DFF;
  }
  @media screen and (max-width:768px) {
  }
`;

export const Choice = styled.span`
  color: ${(props) => props.selected ? 'var(--font-color)' : '#808191'};
  cursor: pointer;
  transition: all .1s ease-in-out;
  &:hover{
    color: var(--font-color);
  }
`;

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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;;

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
