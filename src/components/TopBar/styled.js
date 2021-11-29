import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  font-size: 1.2rem;
  position: relative;
  @media screen and (max-width:768px) {
    justify-content: center;
    padding: .5rem 1rem;
  }

  .material-icons-outlined{
    position: absolute;
    color: ${(props) => props.light ? 'rgba(228, 228, 228, 0.8)' : 'rgba(228, 228, 228, 0.4)'} ;
    margin-right: 1rem;
    right: 1rem;

    @media screen and (max-width:768px) {
      margin-right: .5rem;
      right: 1rem;
    }
  }
`;

export const InputSearch = styled.input`
  font-family: var(--main-font);
  padding: .5rem 1rem;
  background: var(--main-color);
  outline: none;
  width: 40%;
  border: 1px solid rgba(228, 228, 228, 0.4);
  color: var(--font-color);
  transition: all .1s ease-in-out;

  @media screen and (max-width:768px) {
    width: 100%;
  }
  &:focus{
    border: 1px solid rgba(228, 228, 228, 0.8);
  }
`;

export const UserLogo = styled.div`
  font-size: 1.5rem;
  color: var(--font-color);
  cursor: pointer;
  text-shadow: -2px 2px 3px rgba(0,0,0,0.2);
  @media screen and (max-width:768px) {
    display: none;
  }

`;
