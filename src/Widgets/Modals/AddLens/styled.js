import { motion } from 'framer-motion';
import styled from 'styled-components';

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
@media screen and (max-width:768px) {
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
