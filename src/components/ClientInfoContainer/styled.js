import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
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

@media screen and (max-width:408px) {
  flex-direction: column;
  .row{
    flex-direction: column;
  }
}
`;
