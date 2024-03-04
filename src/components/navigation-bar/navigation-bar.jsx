import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";


export const NavigationBar = () => {
  return (
    <>
      <Navbar className="navbar mb-5" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Samuel Meyer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="d-flex align-items-center" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center" as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center" as={Link} to="/portfolio">
                My Work
              </Nav.Link>   
              <Nav.Link className="d-flex align-items-center" as={Link} to="/casestudy">
                Case Study
              </Nav.Link>
            </Nav>
            {/* <Nav>
            <Nav.Link as='a'>
                <a href="https://github.com/s-c-meyer?tab=projects" target="_blank"><img className="footer-image" src={require("../../img/github_icon.svg")} alt="Github icon" /></a>
              </Nav.Link>
              <Nav.Link as='a'>
                <a href="https://www.facebook.com/sam.c.meyer/" target="_blank"><img className="footer-image" src={require("../../img/fb_icon.svg")} alt="Facebook icon" /></a>
              </Nav.Link>
              <Nav.Link as='a'>
                <a href="https://www.linkedin.com/in/samuel-christopher-meyer/" target="_blank"><img className="footer-image" src={require("../../img/linkedin_icon.svg")} alt="LinkedIn icon" /></a>
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Outlet /> */}
    </>
  );
};