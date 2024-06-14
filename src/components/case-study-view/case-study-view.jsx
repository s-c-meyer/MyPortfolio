import { Col, Container, Row, Image, Carousel } from "react-bootstrap"

export const CaseStudyView = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex flex-column align-items-center"  xs={12}>
            <h1 className="mb-5" style={{ fontWeight: "bold" }}>Meyer's Movies Case Study</h1>
          </Col>
          <Col className="d-flex flex-column justify-content-center mb-5 mb-lg-0" xs={12} lg={5}>
            <h2>Overview and Purpose</h2>
            <p>Meyer's Movies is a frontend Single Page Application that utilizes React to display information about movies and users from a RESTful API that I also developed. This project was completed as part of my coursework in CareerFoundry's Full Stack Immersion Course to teach me more about coding the frontend.</p>
            <h2 className="mt-3">Objective and Duration</h2>
            <p>The objective of this project was to develop a project for my portfolio and add React and multiple React libraries to my knowledge base, including React Bootstrap, React Router, and React Redux. This CareerFoundry Achievement took me just under 3 months to complete. I wanted to take my time with this achievement so that each new React Library learned would really stick with me, and I would be able to use these tools confidently after completing this application.</p>
          </Col>
          <Col className="d-flex flex-column justify-content-center mb-5 mb-lg-0" xs={12} lg={7}>
            <Image variant='top' src={require("../../img/MeyersMoviesReact.png")} />
          </Col>
        </Row>
        <Row className="py-5">
          <Col className="d-flex flex-column justify-content-center mb-5 mb-lg-0" xs={12} lg={7}>
            <Image variant='top' src={require("../../img/MyFlixArchDiagram.png")} />
          </Col>
          <Col className="d-flex flex-column justify-content-center" xs={12} lg={5}>
            <h2>Tools, Skills, and Methodologies</h2>
            <p>This project was completed using the MERN Stack when looking at the backend and the frontend. Specifically for the frontend of this project I used React, including many React Libraries such as React Bootstrap, Router, and Redux. I used User Stories and developed an Architectural Diagram, shown below, to help with my implementation of React Redux. At every step I always started off by delivering a Minimum Viable Project (MVP) before going back in to polish things up. </p>
          </Col>
        </Row>
        <Row className="pt-5">
          <h1 className="mb-5 justify-content-center" style={{ fontWeight: "bold" }}>My Approach</h1>
          <Col className="d-flex flex-column justify-content-center" xs={12} lg={6}>
            <h2>Learning React Components</h2>
            <p>Since I had the REST API already built, I simply needed to build the frontend. I determined React would be a good choice because I would need to implement multiple interface views, and using the React Framework would make it easier to scale this project up in the future. I started out by using Parcel to build a very basic version of the application while I was learning how React Components worked together. </p>
          </Col>
          <Col className="d-flex flex-column justify-content-center" xs={12} lg={6}>
            <h2>React Hooks / Connecting to Database</h2>
            <p>After creating a few components using mock data, I connected them to my database using a REST API and React Hooks. I then created forms for my application for user login and signup. I added authentication to these forms using Passport.js middleware for Node.js</p>
          </Col>
        </Row>
        <Row className="mt-3 pb-5">
          <Col className="d-flex flex-column justify-content-center" xs={12} lg={5} style={{ position: 'relative' }}>
            <h2>React Bootstrap & React Router</h2>
            <p>After I had created a working application, or a Minimum Viable Product, I moved on to styling the app with React Bootstrap. I revamped the application using React Bootstrap’s Form, Card, and Button Elements. After this I also added routing to my application using React Router. This was a challenge because I had to change a few things in many places, and if I missed one the application did not work as intended. I solved this by going through each React component one-by-one until I found the issue and resolved it. This problem solving helped me learn React Router more thoroughly. </p>
            <h2>Search Feature with React Redux</h2>
            <p>After this was complete I added one more feature to my application: the ability to search for specific movies using React Redux. This added another React library to my repertoire and added a useful feature to my application. Finally, I deployed my application to Netlify using Parcel as the build tool. </p>
          </Col>
          <Col className="d-flex flex-column justify-content-center" xs={12} lg={7}>
            <Carousel data-bs-theme="dark" className="carousel">
              <Carousel.Item>
                <Image className="w-100" src={require("../../img/LearningReactComponentsThumbnail.png")} />
                <Carousel.Caption className="carousel-label mt-5">
                  <h3 className="carousel-label">Learning React Components</h3>
                </Carousel.Caption>
              </Carousel.Item><Carousel.Item>
                <Image src={require("../../img/ConnectingToDatabaseThumbnail.png")} />
                <Carousel.Caption>
                  <h3>React Hooks / Connecting to Database</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="w-100" src={require("../../img/ReactRouter.png")} />
                <Carousel.Caption>
                  <h3>React Bootstrap & React Router</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="w-100" src={require("../../img/ReactRedux.png")} />
                <Carousel.Caption>
                  <h3>Search Feature with React Redux</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center pt-5">
          <Col className="d-flex flex-column justify-content-center align-items-center" xs={12} md={10}>
            <h1 style={{ fontWeight: "bold" }}>Challenges and Looking Forward</h1>
            <p>Some of the biggest obstacles from this project came when I had to take my working application and refactor it to utilize a different React library. For example, when implementing React Bootstrap and React Router it took me a while to understand how to add these to my existing application.</p>
            <p>After my final submission for this project I went back though and updated the look of the individual movie view to build even further on the minimum requirements for this project. In future iterations I would like to add a “Similar Movies” section to each individual movie view. I would also like to add the ability to add a movie to the database from the application itself. These movies would be visible to every user, not just the user who uploaded them.</p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center my-3'>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-lg-end mb-md-0 mb-4'>
                  <a class="btn btn-primary" href="https://github.com/s-c-meyer/myFlix-client" role="button" target='_blank'>
                    Review the code on Github
                  </a>
                </Col>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-lg-start'>
                  <a class="btn btn-primary" href="https://meyersmovies.netlify.app/" role="button" target='_blank'>
                    View the live demo
                  </a>
                </Col>
              </Row>
      </Container>
    </>
  )
}