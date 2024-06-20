import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";


export const NavigationBar = () => {
  const [currentNav, setCurrentNav] = useState("");

  const setActiveNav = (selectedNav) => {
    const allNavLinks = document.getElementsByClassName("nav-link"); //get all of the nav links
    //use a for loop to remove the active class from all of the NavLinks
    //this is necessary so that when you click the logo picture, it removes the styling
    //from the previous active Nav.Link
    for (let i = 0; i < allNavLinks.length; i++) {
      allNavLinks[i].classList.remove("active");
    }
    setCurrentNav(selectedNav);
  };

  return (
    <>
    <Container fluid className="navbar-container">
      <Navbar variant="dark" activeKey={currentNav} onSelect={setActiveNav} collapseOnSelect className="mb-5" expand="lg">
        {/* CSS transition did not work when there was a container surrounding this navbar? */}
        {/* <Container> */}

        {/* To more easily set the picture as a Navbar.Brand, I may be able to instead use a Nav.Link with a picture, and eliminate
        the home button entirely from the navigation bar, this may actually be better looking anyways instead of having two ways to get
        to a homepage that essentially shows no information */}
          {/* <Navbar.Brand as={Link} to="/">
            Samuel Meyer
          </Navbar.Brand> */}
          <Nav.Link className="me-3" eventKey="Home" as={Link} to="/">
            <img eventKey="Home" src={require("../../img/NavLogo.svg")} alt="Navigation Bar Header Logo" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link eventKey="Home" className="d-flex align-items-center" as={Link} to="/">
                Home
              </Nav.Link> */}
              <Nav.Link eventKey="About" className="d-flex align-items-center" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link eventKey="Contact" className="d-flex align-items-center" as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link eventKey="MyWork" className="d-flex align-items-center" as={Link} to="/portfolio">
                My Work
              </Nav.Link>   
              <Nav.Link eventKey="CaseStudy" className="d-flex align-items-center" as={Link} to="/casestudy">
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
        {/* </Container> */}
      </Navbar>
      </Container>

      {/* <Outlet /> */}
    </>
  );
};