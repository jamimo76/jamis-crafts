import { CROCHET } from "../../shared/CROCHET";
import { Col, Row } from "reactstrap";
import CrochetScarf from "./CrochetScarf";

const CrochetsList = () => {
  return (
    <Row className="ms-auto">
      {CROCHET.map((crochet) => {
        return (
          <Col md="5" className="m-4" key={crochet.id}>
            <CrochetScarf crochet={crochet} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CrochetsList;
