import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Wrapper } from '../components/styled/Common.styled';
import { CardsList } from '../components/styled/Card.styled';
import Form from '../components/Form';
import Card from '../components/Card';

// eslint-disable-next-line react/prop-types
function Home({ countries }) {
  // eslint-disable-next-line no-unused-vars
  const [filtredCountries, setFilteredCountries] = useState(countries);

  const navigate = useNavigate();

  const filter = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredCountries(data);
  };

  const formHandler = (value) => {
    console.log(value);
    console.log(filter);
  };

  const cardClickHandler = (name) => {
    console.log('click', name);
    navigate(`country/${name}`);
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
              img={country.img}
              name={country.name}
              info={country.info}
              onClick={() => cardClickHandler(country.name)}
            />
          ))
          }
        </CardsList>
      </Container>
    </Wrapper>
  );
}

export default Home;
