/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import {
  StyledInfo, InfoImage, InfoTitle,
  ListGroup, List, ListItem,
} from './styled/Info.styled';

// ToDo: вернуть propsValidation!
function Info({ data }) {
  console.log(data);
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
  } = data;

  return (
    <StyledInfo>
      <InfoImage src={flag} alt={name} />

      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b>
              {' '}
              {nativeName}
            </ListItem>
            <ListItem>
              <b>Population</b>
              {' '}
              {population}
            </ListItem>
            <ListItem>
              <b>Region:</b>
              {' '}
              {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b>
              {' '}
              {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b>
              {' '}
              {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Native Name:</b>
            </ListItem>
          </List>
        </ListGroup>
      </div>
    </StyledInfo>
  );
}

Info.defaultProps = {};

export default Info;
