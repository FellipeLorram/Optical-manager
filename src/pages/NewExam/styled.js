import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SeeLastExam = styled.div`
  padding: 2rem 0 0 1rem;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  span{
    color: #808191;
    transition: all .1s ease-in-out;
    cursor: pointer;
    &:hover{
      color: #fff;
    }
  }
`;

export const LastExamContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
  border-left: 1px solid rgba(228,228,228,0.1);
  background: #242731;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 1rem;
  overflow-y: auto;
  overflow-x: hidden;

  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .body{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;

    .title{
      width: 100%;
      text-align: left;
      color: #fff;
    }
    .small--column{
      width: 100%;
      gap: .5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .row{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 1.5rem;
  }
  .info--container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding: .5rem 0;
    border-bottom: 1px solid rgba(228, 228, 228, 0.1);

    .info--label{
      font-size: .8rem;
      color: #808191;
    }
  }

  @media screen and (max-width:788px) {
    width: 90%;
    padding: 1rem .5rem 3rem .5rem;
    .body{
      gap: 1.4rem;
    }
    .info--container{
      gap: 1rem;
      .info--label{
        font-size: .6rem;
      }
    }
  }
`;
