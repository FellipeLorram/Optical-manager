import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
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

  .row--2{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 1.5rem;
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
