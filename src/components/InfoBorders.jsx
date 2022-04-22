import PropTypes from 'prop-types';
import { StyledBorders, TagGroup, Tag } from './styled/Info.styled';

function InfoBorders({ borders }) {
  const clickHandler = (name) => {
    // eslint-disable-next-line no-console
    console.log('click', name);
    // () => push(`/country/${name}`)
  };

  return (
    <StyledBorders>
      <b>Border Countries</b>
      {!borders.length ? (
        <span>There is no border countries</span>
      ) : (
        <TagGroup>
          {borders.map((b) => (
            <Tag key={b} onClick={() => clickHandler(b)}>
              {b}
            </Tag>
          ))}
        </TagGroup>
      )}
    </StyledBorders>
  );
}

InfoBorders.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  borders: PropTypes.array.isRequired,
};

export default InfoBorders;
