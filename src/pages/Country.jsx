import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../services/countries';
import Button from '../components/Button';
import Info from '../components/Info';

function Country() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  const backHandler = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <h1>{name}</h1>
      <Button onClick={backHandler}>
        <IoArrowBack />
        {' '}
        Back
      </Button>
      {country && <Info />}
    </div>
  );
}

export default Country;
