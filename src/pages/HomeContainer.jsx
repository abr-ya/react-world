import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import { ALL_COUNTRIES } from '../services/countries';
import { prepareCountry } from '../utils';

function HomeContainer({ countries, setCountries }) {
  const [filtredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data.map(prepareCountry)));
    }
  }, []);

  const filter = (all, search, region) => {
    let res = [...all];

    if (region) {
      res = res.filter((c) => c.region.includes(region));
    }

    if (search) {
      res = res.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    return res;
  };

  const filterHandler = ({ search, region }) => {
    setFilteredCountries(filter(countries, search, region));
  };

  // для показа стран после первой загрузки
  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  // toDo: почему не работает без фрагмента?!
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {filtredCountries.length
        ? <Home countries={filtredCountries} filterHandler={filterHandler} />
        : <span>{filtredCountries.length}</span> }
    </>
  );
}

HomeContainer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    region: PropTypes.string,
    info: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })),
  })).isRequired,
  setCountries: PropTypes.func.isRequired,
};

export default HomeContainer;
