import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100%;
  background: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 3000;
  padding: 0 3rem;
  @media screen and (max-width:868px) {
    justify-content: center;
    padding: 0;
  }
`;

export const PromotionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  width: 70%;
  height: 90%;
  padding: 2rem 4rem;

  .odd--container, .even--container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 1rem;
    color: var(--font-color);
  }
  .even--container {
    justify-content: flex-end;
  }

  .text--container, .text--container--odd{
    width: 80%;
    text-align: right;
    height: 100%;
    padding: 1rem 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;

    .title{
      font-size: 1.5rem;
      letter-spacing: 0.5px;
    }
    .content{
      font-size: 1rem;
      width: 50%;
      color: #808191;
      line-height: 1.2rem;
    }
  }

  .text--container--odd{
    text-align: left;
    align-items: flex-start;
  }

  @media screen and (max-width:868px) {
    display: none;
  }
`;

export const LoginContainer = styled(motion.div)`
  height: 90%;
  width: 400px;
  border: 1px solid rgba(228, 228, 228, 0.1);
  border-radius: 12px;
  background: var(--card-color);
  box-shadow: 0 8px 25px rgb(0 0 0 / 7%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
  color: var(--font-color);
  gap: 1rem;

  .header{
    width: 100%;
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content:center;
    svg
    {
      width: 80%;
      transform: translateX(15%);
    }
  }

  .sub-title{
    width: 100%;
    padding: .5rem;
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    line-height: 1.33333;
  }

  .body{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .footer{
    font-size: 0.9rem;
    font-family: var(--main-font);
    opacity: 0.9;
    a{
      color: #355DFF;
    }
  }

  @media screen and (max-width:568px) {
    width: 90%;
    padding: 0.5rem 1rem;
    gap: 2rem;
  }

  @media screen and (max-width:408px) {
    width: 90%;
    padding: 0.5rem;
    gap: 1rem;
  }
`;
