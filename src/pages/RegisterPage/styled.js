import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PageContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .header-title{
    font-size: 2rem;
    color: #fff;
    padding: 2rem;
    padding-bottom: 1rem;
    text-shadow: 1px 1px 1px rgba(228,228,228, 0.1);
    text-align: center;
  }
`;

export const RegisterContainer = styled(motion.div)`
  height: 90%;
  max-width: 90%;
  width: 700px;
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
  gap: 2rem;

  @media screen and (max-width:568px) {
    width: 90%;
    padding: 1rem;
    gap: 2rem;
  }

  @media screen and (max-width:408px) {
    width: 90%;
    padding: 1rem;
    gap: 2rem;
  }

`;
