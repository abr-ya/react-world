import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../services/countries';
import { Container } from '../components/styled/Common.styled';
import Button from '../components/Button';
import Info from '../components/Info';

function Country() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
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
