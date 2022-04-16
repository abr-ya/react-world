import styled, { css, createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 25px 50px;
  margin: 20px 0;
  position: relative;
`;

export const StyledHeader = styled.header`
  background-color: rgba(0,0,0,0.4);
  color: #ff6a95;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const StyledButton = styled.button`
  border: 0;
  border-radius: 8px;
  color: #fff;
  width: 100px;
  height: 40px;
  cursor: pointer;

  ${(props) => props.version === 'primary' && css`background-color: #202142;`}
  ${(props) => props.version === 'secondary' && css`background-color: #ff6a95;`}

  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  &:disabled {
    background-color: #cccccc;
    color: #333;
    cursor: auto;
  }
`;
