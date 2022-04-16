import { Container, Card } from '../components/styled/Common.styled';

function About() {
  return (
    <Container>
      <Card>
        <h1>About page</h1>
        <p>Здесь будет рассказ о приложении!)</p>
        <ul>
          Стэк (основное):
          <li>+ React</li>
          <li>- TypeScript</li>
          <li>+- Webpack (CRA)</li>
          <li>+ Styled Components</li>
          <li>- Redux</li>
          <li>- Redux-Saga</li>
          <li>+ React Router 6</li>
          <li>+ Axios</li>
        </ul>
      </Card>
    </Container>
  );
}

export default About;
