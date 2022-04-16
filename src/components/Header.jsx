import { Container } from './styled/Common.styled';
import {
  StyledHeader, Wrapper, Title,
} from './styled/Header.styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}

export default Header;
