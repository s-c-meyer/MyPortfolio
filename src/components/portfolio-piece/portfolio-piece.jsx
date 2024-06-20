import { Container, Row, Col, Stack } from "react-bootstrap";


//will have to pass in button objects that contain a link and the text to display on the button
//will also have to pass in image objects that contain the source and the alt text
//also pass in skills array that simply has the names of the skills to be listed

//with both of the above, I should be able to use the same class within this portfolio-piece

//hopefully this componenet clears up the portfolio view page.


export const PortfolioPiece = () => {
  return (
    <>
      <Container className="mb-5" fluid>
        <div className="badge-inprogress">
          IN PROGRESS
        </div>
        <Row className="portfolio-container px-2 py-5 px-xl-5">
          <Col className="d-flex align-items-center" xs={12} xl={8}>
            <img className="portfolio-img" src={require("../../img/MeetApp2Screens.png")} alt="Computer and Phone Screen showcasing the Meyer's Meet App" />
          </Col>
          <Col xs={12} xl={4}>
            <Stack>
              <h1 className="d-flex justify-content-center mt-4 mt-xl-0">Meyer's Meet App</h1>
              <Stack gap={2}>
                <hr />
                <div className="portfolio-text--main p-4">
                  Meyer's Meet App is a serverless, progressive web application which was built using React with a Test-Driven Development (TDD) Technique. It uses the Google Calendar API to fetch upcoming events. Users can filter events by city, and view the data for their search update in real time.
                </div>
                <a class="portfolio-btn" href="https://github.com/s-c-meyer/meet" role="button" target='_blank'>
                  <span className="portfolio-btn-text--hidden">&lt;&gt; </span>Review the code on GitHub<span className="portfolio-btn-text--hidden"> &lt;/&gt;</span>
                </a>
                <a class="portfolio-btn" href="https://s-c-meyer.github.io/meet/" role="button" target='_blank'>
                  View the live demo
                </a>
              </Stack>  
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}