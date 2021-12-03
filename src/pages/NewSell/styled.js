import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  background: var(--card-bg-color);
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  padding: 1.5rem;
  border: 1px solid rgba(228, 228, 228, 0.1);
  gap: 1.5rem;
  width: 100%;
  margin-top: 1.5rem;
  .title{
    width: 100%;
    text-align: left;
    font-size: 1rem;
    line-height: 2rem;
    padding-top: 1rem;
  }
  .sub-title{
    width: 100%;
    text-align: left;
    font-size: .8rem;
    color: #808191;
    line-height: 2rem;
    padding: .5rem 0;
  }
  .input--container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    flex-direction: row;
  }
  .container-end, .container-start{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    gap: 1rem;
    width: 100%;
  }
  .container-start{
    justify-content: flex-start;
  }

  @media screen and (max-width:408px) {
    .input--container{
      flex-direction: column;
    }
    .container-end{
      justify-content: flex-start;
    }
  }
`;

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

export const InputWrapperSmall = styled(motion.div)`
  width: 100%;
  position: relative;

  button{
    position: absolute;
    left: 0;
    top: 0%;
    height: 100%;
    min-width: 40px;
    background: var(--card-bg-color);
    color: #808191;
    outline: none;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 2;
    border: none;
    border-right: ${(props) => props.animateLabel ? '2px solid #355DFF' : '1px solid rgba(228, 228, 228, 0.1)'};
    border-radius: 12px 0 0 12px;
    transition: all .2s ease-in-out;
  }

  .label{
    position: absolute;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: ${(props) => props.animateLabel ? '22%' : '45%'};
    left: ${(props) => props.button ? '3rem' : '1.1rem'};
    color: #808191;
    font-size: .7rem;
    transition: all .2s ease-in-out;
    font-weight: 700;
    .invalid{
      color: red;
    }
  }
  input{
    width: 100%;
    padding: ${(props) => props.button ? '1rem 1rem .2rem 3rem' : '1rem 1rem .2rem 1rem'};
    height: 60px;
    background: var(--input-bg-color);
    outline: none;
    border-radius: 12px;
    border: ${(props) => props.valid ? '2px solid rgba(228,228,228,0.1)' : '2px solid #d93737'};
    color: var(--font-color);
    font-family: var(--main-font);
    transition: all .2s ease-in-out;
    font-weight: bold;
    font-size: 1rem;

    &:focus{
      border-color: ${(props) => props.valid ? '#355DFF' : '#d93737'};
    }
    @media screen and (max-width:408px) {
      height: 60px;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
