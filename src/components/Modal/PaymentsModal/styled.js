import styled from 'styled-components';

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  width: 100%;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SellInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem;
  flex-direction: row;
  gap: 2rem;
  @media screen and (max-width: 768px) {
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  flex-direction: row;
  gap: 2rem;
  border-bottom: 1px solid rgba(228,228,228,0.1);
  @media screen and (max-width: 768px) {
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 25%;
  border: ${(props) => props.selected ? '1px solid #355DFF' : '1px solid  rgba(228,228,228,0.1)'};
  transition: all .2s ease-in-out;
  cursor: pointer;
  border-radius: 12px;
  width: 100%;
  font-size: .8rem;
  background: var(--input-bg-color);
  color: ${(props) => props.selected ? '' : '#808191'};

  svg{
    width: 24px;
    height: 24px;
  }

  &:hover{
    border-color: #355DFF;
    color: var(--font-color);
    svg{
      stroke: '#808191';
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  gap: 2rem;
  width: 100%;
`;
