import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry, filterByCode } from '../services/countries';
import { Container } from '../components/styled/Common.styled';
import Button from '../components/Button';
import Info from '../components/Info';

function Country() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => {
      setCountry(data[0]);
      if (data[0].borders.length) {
        axios
          .get(filterByCode(data[0].borders))
          // eslint-disable-next-line no-shadow
          .then(({ data }) => setCountry((prev) => ({
            ...prev,
            bordersNames: data.map((c) => c.name),
          })));
      }
    });
  }, [name]);

  const backHandler = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Container>
      <Button onClick={backHandler}>
        <IoArrowBack />
        {' '}
        Back
      </Button>
      {country?.name
        && <Info data={country} />}
    </Container>
  );
}

export default Country;
