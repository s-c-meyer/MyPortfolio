import { Button, Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const PortfolioView = () => {
  return (
    <Container className='mb-5'>
      <Row className='d-flex justify-content-center'>
        <Col className='mb-5' xs={12} lg={10}>
          <Card>
            <Card.Img variant='top' src={require("../../img/MeetApp2Screens.png")} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center my-4' as='h1'>Meyer's Meet App</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
              Meyer's Meet App is a serverless, progressive web application which was built using React with a Test-Driven Development (TDD) Technique. It uses the Google Calendar API to fetch upcoming events.
              Users can filter events by city, and view the data for their search update in real time. 
              </Card.Text>
              <Container>
              <Row className='d-flex justify-content-center my-3'>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end mb-md-0 mb-3'>
                  <a class="btn btn-primary" href="https://github.com/s-c-meyer/meet" role="button" target='_blank'>
                    Review the code on Github
                  </a>
                </Col>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-start'>
                  <a class="btn btn-primary" href="https://s-c-meyer.github.io/meet/" role="button" target='_blank'>
                    View the live demo
                  </a>
                </Col>
              </Row>
              </Container>     
            </Card.Body>  
            <Card.Footer>
              Built using React with Recharts Library, Google Calendar API, and Test-Driven Development Techniques
            </Card.Footer>
          </Card>
        </Col>
        <Col className='my-5' xs={12} lg={10}>
          <Card>
            <Card.Img variant='top' src={require("../../img/chatAppThreePhones.png")} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center my-4' as='h1'>Meyer's Messages App</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
                Meyer's Messages is a chat app that was built using React Native and tested using an Android Emulator. The app provides users with a chat interface and options to share their location and/or images. Images may be shared either from the devices media library, or directly from the camera within the app.
              </Card.Text>
              <Container>
              <Row className='d-flex justify-content-center my-3'>
                <Col xs={12} md={6} className='d-flex justify-content-center'>
                  <a class="btn btn-primary" href="https://github.com/s-c-meyer/chatDemo" role="button" target='_blank'>
                    Review the code on Github
                  </a>
                </Col>
              </Row>
              </Container>     
            </Card.Body>  
            <Card.Footer>
              Built using Google Firestore Database with Firebase Authentication, Expo, React Native with Gifted Chat Library
            </Card.Footer>
          </Card>
        </Col>
        <Col className='my-5' xs={12} lg={10}>
          <Card>
            <Card.Img variant='top' src={require("../../img/MeyersMoviesReact.png")} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center my-4' as='h1'>Meyer's Movies (React)</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
                Meyer's Movies is a single page application that pulls data about movies from a database using a REST API that I built. User's can create a profile to save their favorite movies, and click to learn more about each movie in the database.
              </Card.Text>
              <Container>
              <Row className='d-flex justify-content-center my-3'>
                <Col xs={12} md={4} className='d-flex justify-content-center justify-content-md-end mb-md-0 mb-3'>
                  <a class="btn btn-primary" href="https://github.com/s-c-meyer/myFlix-client" role="button" target='_blank'>
                    Review the code on Github
                  </a>
                </Col>
                <Col xs={12} md={4} className='d-flex justify-content-center mb-md-0 mb-3'>
                  <a class="btn btn-primary" href="https://meyersmovies.netlify.app/" role="button" target='_blank'>
                    View the live demo
                  </a>
                </Col>
                <Col xs={12} md={4} className='d-flex justify-content-center justify-content-md-start mb-md-0 mb-3'>
                  <a class="btn btn-primary" href="/casestudy" role="button" target='_blank'>
                    Meyer's Movies Case Study
                  </a>
                </Col>
              </Row>
              </Container>     
            </Card.Body>  
            <Card.Footer>
              Built using the MERN stack (MongoDB, Express, React, Node.js), along with Parcel as the build tool
            </Card.Footer>
          </Card>
        </Col>
        <Col className='my-5' xs={12} lg={10}>
          <Card>
            <Card.Img variant='top' src={require("../../img/MeyersMoviesAngular.png")} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center my-4' as='h1'>Meyer's Movies (Angular)</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
                Meyer's Messages is a chat app that was built using React Native and tested using an Android Emulator. The app provides users with a chat interface and options to share their location and/or images. Images may be shared either from the devices media library, or directly from the camera within the app.
              </Card.Text>
              <Container>
              <Row className='d-flex justify-content-center my-3'>
                <Col xs={12} md={6} className='d-flex justify-content-center'>
                  <a class="btn btn-primary" href="https://github.com/s-c-meyer/myFlix-Angular-client" role="button" target='_blank'>
                    Review the code on Github
                  </a>
                </Col>
              </Row>
              </Container>     
            </Card.Body>  
            <Card.Footer>
              Built using the MEAN stack (MongoDB, Express, Angular, Node.js)
            </Card.Footer>
          </Card>
        </Col>
        <Col className='my-5' xs={12} lg={10}>
          <Card>
            <Card.Img variant='top' src={require("../../img/PokedexApp.png")} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center my-4' as='h1'>Pokedex App</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
                This app uses the PokeAPI to pull information about pokemon and display them to the user. The user can click on a pokemon to see additional information.
              </Card.Text>
              <Container>
              <Row className='d-flex justify-content-center my-3'>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end mb-md-0 mb-3'>
                  <a class="btn btn-primary" href="https://github.com/s-c-meyer/simple-js-app" role="button" target='_blank'>
                    Review the code on Github
                  </a>
                </Col>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-start'>
                  <a class="btn btn-primary" href="https://s-c-meyer.github.io/simple-js-app/" role="button" target='_blank'>
                    View the live demo
                  </a>
                </Col>
              </Row>
              </Container>     
            </Card.Body>  
            <Card.Footer>
              Built using HTML, CSS, Javascript, Bootstrap, and external API's (PokeAPI)
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>


   


  );
};