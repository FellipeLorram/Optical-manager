import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SeeLastExam = styled.div`
  padding: 2rem 0 0 1rem;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  span{
    color: #808191;
    transition: all .1s ease-in-out;
    cursor: pointer;
    &:hover{
      color: #fff;
    }
  }
`;

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
  @media screen and (max-width:408px) {
    .input--container{
      flex-direction: column;
    }
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

export const LastExamContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
  border-left: 1px solid rgba(228,228,228,0.1);
  background: #242731;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 1rem;
  overflow-y: auto;
  overflow-x: hidden;

  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .body{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;

    .title{
      width: 100%;
      text-align: left;
      color: #fff;
    }
    .small--column{
      width: 100%;
      gap: .5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .row{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 1.5rem;
  }
  .info--container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding: .5rem 0;
    border-bottom: 1px solid rgba(228, 228, 228, 0.1);

    .info--label{
      font-size: .8rem;
      color: #808191;
    }
  }

  @media screen and (max-width:788px) {
    width: 90%;
    padding: 1rem .5rem 3rem .5rem;
    .body{
      gap: 1.4rem;
    }
    .info--container{
      gap: 1rem;
      .info--label{
        font-size: .6rem;
      }
    }
  }
`;

export const ButtonsControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
`;
