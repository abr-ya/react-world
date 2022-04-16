import {
  StyledCard, CardImage, CardBody, CardTitle, InfoList, InfoListItem,
} from './styled/Card.styled';

function Card({
  // eslint-disable-next-line react/prop-types
  img, name, info = [], onClick,
}) {
  return (
    <StyledCard onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <InfoList>
          {info.map((el) => (
            <InfoListItem key={el.title}>
              <b>{`${el.title}: `}</b>
              {el.description}
            </InfoListItem>
          ))}
        </InfoList>
      </CardBody>
    </StyledCard>
  );
}

export default Card;
