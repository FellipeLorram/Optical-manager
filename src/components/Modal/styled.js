import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  z-index: 1045;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background: var(--card-color);
  border-radius: 12px;
  width: ${(props) => props.Lg ? '800px' : '400px'};
  max-width: 90%;
  max-height: 95%;
  overflow-y: hidden;

  @media screen and (max-width: 768px){
  }

`;

export const HeaderContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  .close{
    padding: .5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--input-bg-color);
    cursor: pointer;
    .material-icons-outlined{
      font-size: 1.5rem;
      color: rgba(228,228,228,0.3);
      &:hover{
        color: rgba(228,228,228,0.6);
      }
    }
  }
`;

export const BodyContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .alert--card{
    width: 100%;
    background: rgba(187, 128, 9, 0.15);
    border: 1px solid rgba(187, 128, 9, 0.4);
    border-radius: 12px;
    padding: 1rem;
    font-size: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    color: #C9D1D9;
    span{
      line-height: 1rem;
    }
  }

  .column, .row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: ${(props) => props.gap ? props.gap : '1rem'};
    width: 100%;
  }
  .row{
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    .column, .row{
      gap: 1rem;
    }
  }

`;

export const FooterContainer = styled(motion.div)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  gap: 1rem;

  .delete--frame{
    width: 100%;
    text-align: left;
    span{
      color: #d93737;
      font-size: .6rem;
      border-bottom: 1px solid #d93737;
      padding: 1%;
      cursor: pointer;
    }
  }
`;

export const CurrentContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  gap: 1.5rem;
  border-bottom: 1px solid rgba(228,228,228,0.1);
  padding: 1rem;

  @media screen and (max-width: 768px){
    gap: 1rem;
    padding: .5rem;
    flex-wrap: wrap;
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

export const OtherOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 768px){
    flex-direction: column;

    .input--container{
    width: 100%;
  }
  .btn--container{
    width: 100%;
    text-align: right;
  }
  }
`;
