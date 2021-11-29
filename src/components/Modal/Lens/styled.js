import styled from 'styled-components';

export const Lenses = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid rgba(228,228,228,0.1);
  cursor: pointer;
  color: #808191;
  padding: 1rem;
  text-align: center;
  line-height: 1.5rem;
  transition: all .1s ease-in-out;
  font-size: 1rem;
  background: var(--input-bg-color);
  &:hover{
    border-color: #355DFF;
    color: var(--font-color)
  }
`;
