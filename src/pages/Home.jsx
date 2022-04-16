import { Container, Wrapper } from '../components/styled/Common.styled';
import Form from '../components/Form';

function Home() {
  const formHandler = (value) => {
    console.log(value);
  };

  return (
    <Wrapper>
      <Container>
        <Form changeHandler={formHandler} />
      </Container>
    </Wrapper>
  );
}

export default Home;
