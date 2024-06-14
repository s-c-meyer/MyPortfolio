import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav, Image, Row, Col } from "react-bootstrap";


export const StickyFooter = () => {
  return (
    <>
      <Navbar className="sticky-footer" fixed="bottom" bg="light" variant="light">
        <Container className="d-flex flex-row justify-content-center align-items-center">
          <p xs={12} className="mb-0 me-3">Find me at any of these links: </p>
          <a href="https://github.com/s-c-meyer" target="_blank"><img className="footer-image" src={require("../../img/github_icon.svg")} alt="Github icon" /></a>
          <a href="https://www.facebook.com/sam.c.meyer/" target="_blank"><img className="footer-image" src={require("../../img/fb_icon.svg")} alt="Facebook icon" /></a>
          <a href="https://www.linkedin.com/in/samuel-christopher-meyer/" target="_blank"><img className="footer-image" src={require("../../img/linkedin_icon.svg")} alt="LinkedIn icon" /></a>
        </Container>
      </Navbar>

      {/* <Outlet /> */}
    </>
  );
};