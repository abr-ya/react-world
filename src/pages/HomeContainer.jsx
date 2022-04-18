import axios from 'axios';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import { ALL_COUNTRIES } from '../services/countries';
import { prepareCountry } from '../utils';

// eslint-disable-next-line react/prop-types
function HomeContainer({ countries, setCountries }) {
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data.map(prepareCountry)));
    }
  }, []);

  return (
    <Home countries={countries} />
  );
}

HomeContainer.propTypes = {
  countries: PropTypes.arrayOf({}).isRequired,
  setCountries: PropTypes.func.isRequired,
};

export default HomeContainer;
