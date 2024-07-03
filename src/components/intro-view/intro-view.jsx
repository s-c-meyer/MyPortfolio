import { Container, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const IntroView = () => {
  return (
    <>
    <Container className='d-flex'>
      <Row className='justify-content-center mt-5'>
        <Col xs={8} lg={3} className='mb-4 mb-lg-0 align-content-center'>
          <Image alt="A portrait of me, Sam Meyer" src={require('../../img/sam-meyer-portrait.jpg')} roundedCircle fluid />
        </Col>
        <Col xs={10} lg={7} className='intro-container d-flex flex-column justify-content-center align-items-center align-items-lg-start p-5 ms-0 ms-lg-3'>
          <p className='sizetest'>Well, Hello</p>
          <h3>My name is Sam Meyer. I am a Full-Stack Web Developer who was once an Industrial Engineer from Missouri. </h3>
        </Col>
      </Row>
    </Container>
    </>
  );
};