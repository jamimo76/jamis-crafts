import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5>Links</h5>
          </Col>
          <Col xs="6" sm="3" className="text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a> {" "}
          </Col>
          <Col sm="4" className="text-center">
            <a role="button" className="btn btn-link" href="tel:+6035551234">
              <i className="fa fa-phone" /> 1-603-555-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:jamiscrafts@gmail.com"
            >
              <i className="fa fa-envelope-o" /> jamiscrafts@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );

};
export default Footer;
