import { useNavigate } from 'react-router-dom';
import { Container } from '../components/styled/Common.styled';
import { CardsList } from '../components/styled/Card.styled';
import Form from '../components/Form';
import Card from '../components/Card';

// eslint-disable-next-line react/prop-types
function Home({ countries, filterHandler }) {
  const navigate = useNavigate();
  const cardClickHandler = (name) => {
    navigate(`country/${name}`);
  };

  return (
    <>
      <Container>
        <Form changeHandler={filterHandler} />
      </Container>
      <Container>
        <CardsList>
          {// eslint-disable-next-line react/prop-types
          countries.map((country) => (
            <Card
              key={country.name}
              img={country.img}
              name={country.name}
              info={country.info}
              onClick={() => cardClickHandler(country.name)}
            />
          ))
          }
        </CardsList>
      </Container>
    </>
  );
}

export default Home;
