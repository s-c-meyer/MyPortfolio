import { Col, Container, Row, Image } from "react-bootstrap"

export const AboutView = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center" xs={12} lg={6}>
            <h1 className="mb-4">"Who is this guy, anyway?"</h1>
            <p>At the beginning of 2023, I started traveling with my fiancée who is a travel nurse, looking forward to new experiences both in life and in my career! I received my degree in Chemical Engineering and worked as an Industrial Engineer for 3 years where I taught myself Autodesk Inventor, a 3D modeling software.</p>
            <p>As my fiancée and I took this leap and moved from Missouri to Oregon I decided it was time to shake things up in my career. If I could teach myself a 3D modeling software, then with the help of Career Foundry's Full-Stack Web Development Program I can certainly become a great Web Developer!</p>
            <p>We've since been to Oregon, Washington, Alaska, Maine, Missouri, Illinois, and Arizona! And I have since finished my Full-Stack Web Development course with CareerFoundry. </p>         
            <p>In my freetime I like to sit down and enjoy some video games, go to the gym, or spend time outside enjoying a nice hike.</p>
          </Col>
          {/* Maybe put in a carousel of pictures here? Maybe make it a little smaller? */}
          <Col xs={12} lg={6}>
            <Image className="about-picture mx-3" src={require("../../img/Acadia Picture.jpg")} rounded />
          </Col>
        </Row>
        <Row className="my-4">
          <h1>Skills</h1>
        </Row>
        <Row>
          <Col xs={12} lg={4} className="d-flex flex-column align-items-lg-start align-items-center mb-5 mb-lg-0">
            <h3 className="mb-4">Front-End Development</h3>
            <p>React / React Redux</p>
            <p>Angular.js</p>
            <p>Javascript ES6 / Node.js</p>
            <p>Typescript</p>
            <p>HTML5</p>
            <p>CSS / Sass</p>
          </Col>
          <Col xs={12} lg={4} className="d-flex flex-column align-items-center mb-5 mb-lg-0">
            <h3 className="mb-4">Testing</h3>
            <p>Test-Driven Development</p>
            <p>Behavior-Driven Development</p>
            <p>React Testing Library</p>
            <p>Postman</p>
            <p>Puppeter</p>
            <p>Jest-Cucumber</p>
          </Col>
          <Col xs={12} lg={4} className="d-flex flex-column align-items-lg-end align-items-center">
            <h3 className="mb-4">Back-End Development</h3>
            <p>REST API's</p>
            <p>MongoDB</p>
            <p>PostgreSQL</p>
            <p>Express</p>
            <p>CORS / Passport</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}