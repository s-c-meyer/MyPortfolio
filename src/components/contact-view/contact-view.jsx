import { Col, Container, Row } from "react-bootstrap";

export const ContactView = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <h3>Visit me at any of the links above!</h3>
        </Col>
        <Col xs={12} className="d-flex justify-content-center mb-5">
          <h3>The best way to reach me directly is by email:</h3>
        </Col>
        <Col className="d-flex justify-content-center">
          <a className="contact-email" href="mailto:meyer.samuelc@gmail.com">meyer.samuelc@gmail.com</a>
        </Col>
        
      </Row>
    </Container>
  );
};