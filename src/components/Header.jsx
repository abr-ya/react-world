import { useState, useEffect } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './styled/Common.styled';
import {
  StyledHeader, Wrapper, Title, ThemeSwitcher,
} from './styled/Header.styled';

function Header() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === 'light'
              ? <IoMoonOutline size="14px" />
              : <IoMoon size="14px" />}
            {' '}
            <span style={{ marginLeft: '0.75rem' }}>{`${theme} Theme`}</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}

export default Header;
