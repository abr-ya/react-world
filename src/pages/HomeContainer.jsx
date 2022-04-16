import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './Home';
import { ALL_COUNTRIES } from '../services/countries';
import { prepareCountry } from '../utils';

function HomeContainer() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data.map(prepareCountry)));
  }, []);

  return (
    <Home countries={countries} />
  );
}

export default HomeContainer;
