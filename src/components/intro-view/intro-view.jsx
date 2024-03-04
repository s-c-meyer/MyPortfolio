import { Container, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const IntroView = () => {
  return (
    <>
    <Container className='d-flex'>
      <Row className='justify-content-center mt-5'>
        <Col xs={8} lg={4} className='mb-5 mb-lg-0'>
          <Image alt="A portrait of me, Sam Meyer" src={require('../../img/sam-meyer-portrait.jpg')} roundedCircle fluid />
        </Col>
        <Col xs={12} lg={8} className='d-flex flex-column justify-content-center ps-5'>
          <h1>Well, Hello</h1>
          <h3>My name is Sam Meyer. I am a Full-Stack Web Developer who was once an Industrial Engineer from Missouri. </h3>
        </Col>
      </Row>
    </Container>
    {/* <Navbar sticky='bottom'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Samuel Meyer
        </Navbar.Brand>
      </Container>
    </Navbar> */}
    {/* <Container>
      <Row className='d-flex justify-content-center'><h3 className='d-flex justify-content-center'>Find me on:</h3></Row>
      <Row className='d-flex justify-content-center'>
        <Col xs={1}>
          <a href="https://github.com/s-c-meyer?tab=projects" target="_blank"><img id="gh_logo" className="social-media--icon" src={require("../../img/github_icon.svg")} alt="Github icon" /></a>
         </Col>  
        <Col xs={1}>
          <a href="https://www.facebook.com/sam.c.meyer/" target="_blank"><img id="fb_logo" className="social-media--icon" src={require("../../img/fb_icon.svg")} alt="Facebook icon" /></a>
        </Col>
        <Col xs={1}>
          <a href="https://www.linkedin.com/in/samuel-christopher-meyer/" target="_blank"><img id="li_logo" className="social-media--icon" src={require("../../img/linkedin_icon.svg")} alt="LinkedIn icon" /></a>
        </Col> 
      </Row>
    </Container> */}
    </>
  );
};