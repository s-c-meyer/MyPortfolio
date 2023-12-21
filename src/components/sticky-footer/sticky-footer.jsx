import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav, Image } from "react-bootstrap";


export const StickyFooter = () => {
  return (
    <>
      <Navbar className="sticky-footer" fixed="bottom">
        <Container className="d-flex justify-content-center">
          <a href="https://github.com/s-c-meyer?tab=projects" target="_blank"><img className="footer-image" src={require("../../img/github_icon.svg")} alt="Github icon" /></a>
          <a href="https://www.facebook.com/sam.c.meyer/" target="_blank"><img className="footer-image" src={require("../../img/fb_icon.svg")} alt="Facebook icon" /></a>
          <a href="https://www.linkedin.com/in/samuel-christopher-meyer/" target="_blank"><img className="footer-image" src={require("../../img/linkedin_icon.svg")} alt="LinkedIn icon" /></a>
        </Container>
      </Navbar>

      {/* <Outlet /> */}
    </>
  );
};