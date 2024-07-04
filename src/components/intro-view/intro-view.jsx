import { Container, Navbar, Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

export const IntroView = () => {
  return (
    <>
    <Container className='d-flex mb-4 mt-lg-3'>
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

    <Container className='mt-5'>
      <Row className='d-flex justify-content-around mt-5'>
        <Col as={Nav.Link} href="/portfolio" xs={10} lg={5} className='d-flex intro-button align-items-center justify-content-around p-4 mb-5 mb-lg-0'>
          <h3 className='mb-0 intro-button--link'>See what I do for work</h3>
          <Image className='intro-icon ms-3' src={require('../../img/keyboard-icon.svg')} />
        </Col>

        <Col as={Nav.Link} href="/about" xs={10} lg={5} className='d-flex intro-button align-items-center justify-content-around p-4'>
          <h3 className='mb-0 intro-button--link'>See what I do for fun</h3>
          <Image className='intro-icon ms-3' src={require('../../img/hike-icon.svg')} />
        </Col>
      </Row>
    </Container>
    </>
  );
};