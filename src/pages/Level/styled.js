import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  background: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  @media screen and (max-width:768px) {
    padding: 0;
  }
`;

export const LevelContainer = styled(motion.form)`
  height: 90%;
  width: 500px;
  max-width: 90%;
  border: 1px solid rgba(228, 228, 228, 0.1);
  border-radius: 12px;
  background: var(--card-color);
  box-shadow: 0 8px 25px rgb(0 0 0 / 7%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 4rem 2rem;
  color: var(--font-color);
  gap: 1rem;
overflow-y: hidden;
  .header{
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
  }
  .body, .footer{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .body{
    gap: 3rem;
    height: 100%;
  }
`;

export const LevelSelectContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${(props) => props.open ? '#355DFF' : 'rgba(228, 228, 228, 0.1)'};
  width: 100%;
  background: var(--input-bg-color);

  .body--items{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const Item = styled(motion.div)`
  padding: 2rem;
  width: 100%;
  font-size: .8rem;
  color: ${(props) => props.selected ? 'var(--font-color)' : '#808191'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: color .2s ease-in-out;
  .material-icons-outlined{
    transition: all .2s ease-in-out;
    transform: ${(props) => props.open && 'rotate(180deg)'};
  }

  &:hover{
    color: #fff;
  }
`;
