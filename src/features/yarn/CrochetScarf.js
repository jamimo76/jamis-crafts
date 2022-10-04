import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText
} from "reactstrap";

const CrochetScarf = ({ crochet }) => {
  const { image, name, description, colors } = crochet;
  return (
    <Card>
      <CardImg src={(image, colors)} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default CrochetScarf;
