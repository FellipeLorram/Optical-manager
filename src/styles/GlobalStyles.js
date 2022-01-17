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

// Constructor

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

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: .8rem;
  span{
    font-size: .8rem;
    color: ${(props) => props.isOn ? 'var(--font-color)' : '#808191'};
  }
`;

export const HandleContainer = styled.div`
  width: 3rem;
  height: 2rem;
  background-color: var(--input-bg-color);
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.isOn ? 'flex-end' : 'flex-start'};
  border-radius: 50px;
  padding: 0.2rem;
  cursor: pointer;

  .handle{
    width: 50%;
    height: 80%;
    background-color: ${(props) => props.isOn ? '#355DFF' : '#808191'};
    border-radius: 50%;
  }
`;

// Containers

export const FormBodyContainer = styled.div`
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
  .input--container, .input--container--start{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    flex-direction: row;
  }
  .input--container--start{
    justify-content: flex-start;
  }
  @media screen and (max-width:408px) {
    .input--container{
      flex-direction: column;
    }
  }
`;

export const FormContainer = styled(motion.div)`
  width: 100%;
  border: 1px solid rgba(228, 228, 228, 0.1);
  border-radius: 12px;
  background: var(--card-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.5rem;
  color: var(--font-color);
  gap: 1.5rem;

  .row--2, .row--start{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 1.5rem;
  }
  .row--start{
    justify-content: flex-start;
  }

  .footer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.buttonEnd ? 'flex-end' : 'space-between'};
    flex-direction: row;
    gap: 1.5rem;
  }

  @media screen and (max-width:408px) {
    gap: 2rem;

    .row--2, .footer{
      flex-direction: column;
    }
    .footer{
      align-items: flex-start;
      flex-direction: row;
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

  .container-end{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    gap: 1rem;
  }
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
    font-size: 1.5rem;
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

export const ContainerGrid = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap:  ${(props) => props.gap ? props.gap : '1.5rem'};
  position: relative;
  padding: ${(props) => props.noP ? 0 : '1rem'};

  .no-content{
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    width: 100%;
    color: #808191;
    line-height: 2rem;
  }

  @media screen and (max-width:1080px) {
    grid-template-columns: repeat(2, 1fr);
    max-height: ${(props) => props.overflowY ? '350px' : 'unset'};
    overflow-y: ${(props) => props.overflowY ? 'auto' : 'initial'};
  }

  @media screen and (max-width:768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: ${(props) => props.noP ? 0 : '1rem'};
    max-height: ${(props) => props.overflowY ? '250px' : 'unset'};
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
