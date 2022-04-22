import PropTypes from 'prop-types';
import { StyledBorders, TagGroup, Tag } from './styled/Info.styled';

function InfoBorders({ borders, goToHandler }) {
  const clickHandler = (name) => {
    goToHandler(`/country/${name}`);
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
  goToHandler: PropTypes.func.isRequired,
};

export default InfoBorders;
