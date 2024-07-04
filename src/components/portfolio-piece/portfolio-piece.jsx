import { Container, Row, Col, Stack } from "react-bootstrap";
import { useState } from "react";


//will have to pass in button objects that contain a link and the text to display on the button
//will also have to pass in image objects that contain the source and the alt text
//also pass in skills array that simply has the names of the skills to be listed

//with both of the above, I should be able to use the same class within this portfolio-piece

//hopefully this componenet clears up the portfolio view page.


export const PortfolioPiece = ({ isCompleted, image, title, body, githubLink, demoLink, caseStudyLink, tools }) => {
  return (
    <>
      <Container className="mb-5" fluid>
        <div className={ isCompleted ? "badge-completed" : "badge-inprogress" }>
          {isCompleted ? "COMPLETED" : "IN PROGRESS"}
        </div>
        <Row className="portfolio-container px-2 py-5 px-xl-5">
          <Col className="d-flex align-items-center" xs={12} xl={8}>
            <img className="portfolio-img" src={image.src} alt={image.alt} />
          </Col>
          <Col xs={12} xl={4}>
            <Stack>
              <h1 className="d-flex justify-content-center mt-4 mt-xl-0">{title}</h1>
              <Stack gap={2}>
                <hr />
                <div className="portfolio-text--main p-4">{body}</div>
                {githubLink && <a class="portfolio-btn" href={githubLink} role="button" target='_blank'><span className="portfolio-btn-text--hidden">&lt;&gt; </span>Review the code on GitHub<span className="portfolio-btn-text--hidden"> &lt;/&gt;</span></a>}
                {demoLink && <a class="portfolio-btn" href={demoLink} role="button" target='_blank'>View the live demo</a>}
                {caseStudyLink && <a class="portfolio-btn" href={caseStudyLink} role="button" target='_blank'>View the Case Study</a>}
              </Stack>  
            </Stack>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center" xs={12}>
          <Col className="portfolio-container-bottom d-flex justify-content-center" xs={12} xl={7}>
          {/* May eventually use this section below to design badges for the frameworks used */}
            {/* <Row className="d-flex justify-content-center">
              {
                tools?.map((tool) => 
                  <Col className="d-flex justify-content-center portfolio-text--framework" xs={12}>
                    {tool}
                  </Col>
                )
              }
            </Row> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}