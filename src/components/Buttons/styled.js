import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = styled(Link)`
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

export const NormalButton = styled(motion.button)`
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
