import { Container, Wrapper } from '../components/styled/Common.styled';
import { CardsList } from '../components/styled/Card.styled';
import Form from '../components/Form';
import Card from '../components/Card';

// eslint-disable-next-line react/prop-types
function Home({ countries }) {
  console.log(countries);

  const formHandler = (value) => {
    console.log(value);
  };

  return (
    <Wrapper>
      <Container>
        <Form changeHandler={formHandler} />
      </Container>
      <Container>
        <CardsList>
          {// eslint-disable-next-line react/prop-types
          countries.map((country) => (
            <Card
              key={country.name}
              onClick={() => console.log('click', country.name)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...country}
            />
          ))
          }
        </CardsList>
      </Container>
    </Wrapper>
  );
}

export default Home;
