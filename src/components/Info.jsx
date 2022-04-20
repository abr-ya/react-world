/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import {
  StyledInfo, InfoImage, InfoTitle,
  ListGroup, List, ListItem,
} from './styled/Info.styled';

function Item({ title, value }) {
  return (
    <ListItem>
      <b>{title}</b>
      {`: ${value}`}
    </ListItem>
  );
}

// ToDo: вернуть propsValidation!
function Info({ data }) {
  // eslint-disable-next-line no-console
  console.log(data);
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
  } = data;

  return (
    <StyledInfo>
      <InfoImage src={flag} alt={name} />

      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <Item title="Population" value={population} />
            <Item title="Region" value={region} />
            <Item title="Subregion" value={subregion} />
            <Item title="Capital" value={capital} />
          </List>
          <List>
            <Item title="Native Name" value={nativeName} />
            <Item title="Currencies" value={currencies.map((el) => el.code).join(', ')} />
            <Item title="Languages" value={languages.map((el) => el.name).join(', ')} />
          </List>
        </ListGroup>
      </div>
    </StyledInfo>
  );
}

Info.defaultProps = {};

export default Info;
