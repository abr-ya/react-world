import axios from 'axios';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import { ALL_COUNTRIES } from '../services/countries';
import { prepareCountry } from '../utils';

function HomeContainer({ countries, setCountries }) {
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data.map(prepareCountry)));
    }
  }, []);

  return (
    <Home countries={countries} />
  );
}

HomeContainer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })),
  })).isRequired,
  setCountries: PropTypes.func.isRequired,
};

export default HomeContainer;
