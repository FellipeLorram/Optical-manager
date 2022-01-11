import styled from 'styled-components';

export const BodyContainer = styled.div`
padding: 1rem;
display: flex;
align-items: center;
justify-content: center;
width: 100%;

.alert--card{
  width: 100%;
  background: rgba(187, 128, 9, 0.15);
  border: 1px solid rgba(187, 128, 9, 0.4);
  border-radius: 12px;
  padding: 1rem;
  font-size: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: #C9D1D9;
  text-align: center;
  span{
    line-height: 1rem;
  }
}

.column, .row{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: ${(props) => props.gap ? props.gap : '1rem'};
  width: 100%;
}
.row{
  flex-direction: row;
}
@media screen and (max-width: 768px) {
  .column, .row{
    gap: 1rem;
  }
}

`;
