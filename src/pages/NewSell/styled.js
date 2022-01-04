import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SelectModal = styled.div`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(228,228,228,0.1);
  color: #808191;
  font-family: var(--main-font);
  transition: all .2s ease-in-out;
  font-weight: bold;
  font-size: .7rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--input-bg-color);
  border-radius: 12px;
  gap: .5rem;

  .frame{
    font-size: 1rem;
    color: var(--font-color);
  }

  &:hover{
    cursor: ${(props) => props.block ? 'initial' : 'pointer'};
    border-color: ${(props) => props.block ? 'rgba(228,228,228,0.1)' : '#355DFF'};
  }

`;

export const PaymentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5rem;
  border: 1px solid rgba(228,228,228,0.1);

  .payment-container-header{
    width: 100%;
    text-align: left;
    padding: 1rem;
    border-bottom: 1px solid rgba(228,228,228,0.1);
  }
  .payment-container-grid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
    border-bottom: 1px solid rgba(228,228,228,0.1);
    padding: 1rem;
  }
  .payment-container-footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;
    width: 100%;
    color: #808191;
  }
  .no-payments{
    width: 100%;
    text-align: center;
    color: #808191;
    padding: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid rgba(228,228,228,0.1);
  }
  @media screen and (max-width:1068px) {
    .payment-container-grid{
      grid-template-columns: repeat(2, 1fr);
    }
    .payment-container-footer{
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      span{
        padding: 1rem 0;
        width: 100%;
        border-bottom: 1px solid rgba(228,228,228,0.1);
      }
    }
  }
  @media screen and (max-width:768px) {
    .payment-container-grid{
      grid-template-columns: 1fr;
    }
  }
`;

export const Payment = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid rgba(228,228,228,0.1);
    padding: 1rem;
    background: var(--input-bg-color);
    cursor: pointer;
    font-size: 1rem;
    box-shadow: rgb(0 0 0 / 20%) 0px 7px 29px 0px;;
    transition: all .15s ease-in-out;
    .payment-row{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      flex-direction: row;
      padding: .5rem;
      border-bottom: 1px solid rgba(228,228,228,0.1);

      .payment-row-text{
        color: #808191;
      }
    }

  :hover{
    border-color: #355DFF;
  }
`;
