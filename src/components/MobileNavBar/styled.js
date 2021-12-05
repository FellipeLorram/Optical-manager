import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 105px;
  position: fixed;
  height: 3.5rem;
  width: 100%;
  border-right: none;
  background: var(--main-color);
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 1rem;
  color: var(--font-color);
  gap: 3rem;
  font-size: 1rem;
  transition: all .25s ease-in-out;
  z-index: 1000;
  left: 0;
  bottom: 0;
  padding: 0;
  border-top: 1px solid rgba(228, 228, 228, 0.1);
  padding: .2rem;

  .body{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    z-index: 999;
  }
  @media screen and (max-width:768px) {
    display: flex;
  }
`;

export const Slink = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.active ? '#355DFF' : '#808191'};
  text-decoration: none;
  padding: .5rem 1rem;
  font-size: 1rem;
  margin-bottom: 0;
  gap: .3rem;
  transition: all .1s ease-in-out;
  background: ${(props) => props.active ? '#191B20' : 'none'};
  border-radius: 15px;
  cursor: pointer;
  z-index: 1001;
  .material-icons-outlined{
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .text{
    font-size: .4rem;
    font-weight: bold;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    letter-spacing: 1px;
  }
`;
