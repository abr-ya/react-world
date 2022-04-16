import { Container, Card } from '../components/styled/Common.styled';

function Home() {
  console.log('first!');

  return (
    <Container>
      <Card>
        <h1>Home page</h1>
        <p>Простой стартер: CRA + Styled Components + Router</p>
      </Card>
    </Container>
  );
}

export default Home;
