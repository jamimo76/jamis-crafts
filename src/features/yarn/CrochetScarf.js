import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CrochetScarf = (props) => {
  return (
    <Card>
      <CardImg
        width="100%"
        src={props.crochet.image}
        alt={props.crochet.name}
      />
    </Card>
  );
};

export default CrochetScarf;
