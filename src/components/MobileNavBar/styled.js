import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  border-right: none;
  background: var(--main-color);
  display: none;
  align-items: center;
  justify-content: center;
  color: var(--font-color);
  font-size: 1rem;
  z-index: 1000;
  left: 0;
  bottom: 0;
  padding: 0;
  border-top: 1px solid rgba(228, 228, 228, 0.1);

  .body{
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  padding: .8rem 1.2rem;
  font-size: 1rem;
  transition: all .1s ease-in-out;
  background: ${(props) => props.active ? '#191B20' : 'none'};
  cursor: pointer;
  z-index: 1001;
  border-top: ${(props) => props.active ? '1px solid #355DFF' : '1px solid transparent'};
  .material-icons-outlined{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text{
    display: none;
    font-size: .4rem;
    font-weight: bold;
    letter-spacing: 2px;
    transform: ${(props) => props.active ? 'translateY(0)' : 'translateY(20px)'};
    opacity: ${(props) => props.active ? '1' : '0'};
  }
`;
