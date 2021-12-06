import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: ${(props) => props.open ? '255px' : '94px'};
  border-right: 1px solid rgba(228, 228, 228, 0.1);
  background: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 3rem 1rem;
  color: var(--font-color);
  gap: 3rem;
  font-size: 1rem;
  transition: all .25s ease-in-out;
  .header{
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.open ? 'space-between' : 'center'};
    flex-direction: row;
    width: 100%;
    transition: all .2s ease-in-out;
    padding-left: .5rem;
    .toggle--container{
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transform: scale(1.2);
      transition: all .2s ease-in-out;
    }
    .LOGO{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${(props) => props.open ? '1.5rem' : '0'};

      svg{
        width: 100%;
        height: 100%;
      }
    }
  }

  .body{
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  @media screen and (max-width:1068px) {
    width: 90px;
    justify-content: center;
    .header{
      display: none;
    }
  }

  @media screen and (max-width:768px) {
    position: fixed;
    z-index: 2000;
    left: ${(props) => props.open ? '0' : '-100%'};
    top: 0;
    width: 100%;
    height: 100vh;
    border-right: none;
    border-top: 1px solid rgba(228, 228, 228, 0.1);
    padding: 0;
    gap: 1rem;

    .header{
      display: flex;
      justify-content: space-between;
      padding: 2rem;
      border-bottom: 1px solid rgba(228, 228, 228, 0.1);

      .toggle--container{
        width: 50%;
        justify-content: flex-end;
      }
      .LOGO{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        svg{
          width: 80%;
          height: 80%;
        }
      }
    }
  }
`;

export const Slink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.active === 'true' ? '#355DFF' : '#808191'};
  text-decoration: none;
  padding: .5rem 1rem;
  gap: 1.2rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: all .1s ease-in-out;
  background: ${(props) => props.active === 'true' ? '#191B20' : 'none'};
  border-radius: 12px;
  cursor: pointer;
  .material-icons-outlined{
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .text{
    padding-top: .4rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  &:hover{
    color: ${(props) => props.active === 'true' ? '#355DFF' : '#fff'} ;
  }
  @media screen and (max-width:768px) {
    justify-content: flex-start;
    padding: .5rem 2rem;
    margin-bottom: .5rem;
    font-size: .8rem;
  }
`;
