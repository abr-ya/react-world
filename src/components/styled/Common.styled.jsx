import styled, { createGlobalStyle } from 'styled-components/macro'; // css

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

export const StyledMain = styled.main`
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
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const StyledButton = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
    opacity: 0.9;
  }
`;

// ${(props) => props.version === 'primary' && css`background-color: #202142;`}
// ${(props) => props.version === 'secondary' && css`background-color: #ff6a95;`}

// &:disabled {
//   background-color: #cccccc;
//   color: #333;
//   cursor: auto;
// }
