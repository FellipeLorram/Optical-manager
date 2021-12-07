import styled from 'styled-components';

export const SwitchContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(228,228,228,0.1);
`;

export const PaperComponentContainer = styled.div`
  width: 100%;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .paper{
    height: 15rem;
    width: 60%;
    background: #fff;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .2rem;
    flex-direction: column;
    padding: 1rem .4rem;
  }

  @media screen and (max-width: 768px){
    display: none;
  }

`;
export const BlockLetters = styled.div`
  width: 90%;
  padding: ${(props) => props.large ? '.8rem' : '.4rem'};
  border-radius: 5px;
  background: #ccc;
`;
