import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --main-color: #1F2128;
  --font-color: #ffffff;
  --main-font: 'Josefin Sans', sans-serif;
  --card-color: #242731;
  --input-bg-color: #191B20;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body, html {
  min-height: 100vh;
  background: var(--main-color);
}

body {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-size: 62.5%;
  font-family: var(--main-font);

  @media screen and (max-width:768px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
#root{
  background: var(--main-color);
  @media screen and (max-width:768px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
@media screen and (max-width:768px) {
  *::-webkit-scrollbar {
    display: none;
  }
}
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: var(--main-color);
`;

export const PageContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  font-family: var(--main-font);
  padding: 2rem;
  gap: 1rem;
  color: var(--font-color);
  background: var(--main-color);

  .no-content{
    padding: 2rem 1rem;
    font-size: 1rem;
    width: 100%;
    color: #808191;
    border-bottom: 1px solid rgba(228, 228, 228, 0.1);
    margin-bottom: 1rem;
  }

  @media screen and (max-width:768px) {
    padding: 1rem .5rem;
  }
`;

export const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 3.5rem;
  background: var(--main-color);
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
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(228, 228, 228, 0.6);
  }

`;

export const Button = styled(motion.button)`
  width: ${(props) => props.mW && '100%'};
  border-radius: 12px;
  padding: 1rem 1.5rem;
  background: ${(props) => props.cancel ? '#d93737' : '#355DFF'} ;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: var(--main-font);
  font-weight: 700;
  color: #fff;
  transition: all .15s ease-in-out;
  text-decoration: none;
  text-align: center;
  font-size: .8rem;


  &:hover{
    filter: brightness(90%);
    color: #000;
  }

`;

export const LinkButton = styled(Link)`
  border-radius: 12px;
  padding: 1rem;
  background: #355DFF;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: var(--main-font);
  font-weight: 700;
  color: #fff;
  transition: all .15s ease-in-out;
  text-decoration: none;
  text-align: center;
  font-size: .8rem;
  &:hover{
    filter: brightness(90%);
    color: #000;
  }
`;

export const InputWrapper = styled(motion.div)`
  width: 100%;
  position: relative;

  .label{
    position: absolute;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: ${(props) => props.animateLabel ? '25%' : '45%'};
    left: 1.1rem;
    color: #808191;
    font-size: .6rem;
    transition: all .2s ease-in-out;
    font-weight: 700;
    .invalid{
      color: red;
    }
  }
  input{
    width: 100%;
    padding: 1rem 1rem .2rem 1rem;
    height: 80px;
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
  textarea{
    width: 100%;
    padding: 2.5rem 1rem .2rem 1rem;
    height: 80px;
    background: var(--input-bg-color);
    outline: none;
    border-radius: 12px;
    border: ${(props) => props.valid ? '2px solid rgba(228,228,228,0.1)' : '2px solid #d93737'};
    color: var(--font-color);
    font-family: var(--main-font);
    transition: all .2s ease-in-out;
    font-weight: bold;
    font-size: 1rem;
    resize: none;

    &:focus{
      border-color: ${(props) => props.valid ? '#355DFF' : '#d93737'};
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputWrapperSmall = styled(motion.div)`
  width: 100%;
  position: relative;

  .label{
    position: absolute;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: ${(props) => props.animateLabel ? '25%' : '45%'};
    left: 1.1rem;
    color: #808191;
    font-size: .6rem;
    transition: all .2s ease-in-out;
    font-weight: 700;
    .invalid{
      color: red;
    }
  }
  input{
    width: 100%;
    padding: 1rem 1rem .2rem 1rem;
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

export const PageHeader = styled.div`
  width: 100%;
  padding: 1.5rem 0 ;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  font-size: 1.5rem;
  color: var(--font-color);
  @media screen and (max-width:768px) {
    padding: 1rem;
  }
`;

export const AddButton = styled(Link)`
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;;
  color: #fff;
  border-radius: 12px;
  padding: 1.1rem;
  background: #355DFF;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: var(--main-font);
  font-weight: 700;
  transition: all .15s ease-in-out;
  text-decoration: none;
  gap: .5rem;
  font-size: 1rem;
  &:hover{
    filter: brightness(90%);
    color: #000;
  }
`;

export const ContainerGrid = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap:  ${(props) => props.gap ? props.gap : '1.5rem'};
  position: relative;
  padding: ${(props) => props.noP ? 0 : '1rem'};

  .no-content{
    padding: 1rem;
    font-size: 1rem;
    width: 100%;
    color: #808191;
    line-height: 2rem;
  }

  @media screen and (max-width:1080px) {
    grid-template-columns: repeat(2, 1fr);
    max-height: 350px;
    overflow-y: ${(props) => props.overflowY ? 'auto' : 'initial'};
  }

  @media screen and (max-width:768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: ${(props) => props.noP ? 0 : '1rem'};
    max-height: ${(props) => props.overflowY ? '250px' : ''};
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

export const LineSeparator = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(228, 228, 228, 0.1);
`;

export const Delete = styled.div`
  margin-top: 2rem;
  font-size: .8rem;
  color: #d93737;
  display: flex;
  justify-content: flex-end;
  text-decoration: underline;
  cursor: pointer;
`;

export const LinkButtonSvg = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  font-size: 1rem;
  color: var(--font-color);
  text-decoration: none;
  background: #242731;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 15px 35px rgb(0 0 0 / 7%);
  transition: all .15s ease-in-out;
  border: 1px solid transparent;
  min-width: 128px;

  span{
    padding: .5rem;
    font-weight: 700;
  }
  .icon--container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    svg{
      width: 100%;
      height: 3rem;
    }
  }
  &:hover{
    border: 1px solid #355DFF;
  }
  @media screen and (max-width:768px) {
    padding: .5rem;
    gap: .5rem;
    font-size: .8rem;
    .icon--container{
      svg{
        width: 100%;
        height: 2rem;
      }
    }
  }
`;
