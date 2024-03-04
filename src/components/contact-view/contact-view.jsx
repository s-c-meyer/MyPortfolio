import { useEffect, useRef, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row, Button, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const ContactView = () => {
  const [successShow, setSuccessShow] = useState(false);
  const [dangerShow, setDangerShow] = useState(false);
  const [email, setEmail] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_vzdaj5r', 'template_8diqicq', form.current, {
        publicKey: 'jNjCvUYD0TwbBC8Eo',
      })
      .then(
        () => {
          console.log('Email sent successfully!');
          e.target.reset(); //reset the form to default after submission
          setSuccessShow(true);
        },
        (error) => {
          console.log('Email failed to send: ' + error.text);
          setFailShow(true);
        },
      );
  }

  //add the script from LinkedIn to display a LinkedIn Profile Badge. 
  useEffect(() => {
    const script = document.createElement("script");

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = "text/javascript"

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    
    <Container>              
      <Row className="d-flex justify-content-center mt-5">
        <Col xs={12} lg={6}>
          <Form ref={form} onSubmit={sendEmail} className="mb-5">
          <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control name="Name" placeholder="Name" required  />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="mb-3"
            >
              <Form.Control 
                name="Email" 
                type="email" 
                placeholder="name@example.com" 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Subject"
              className="mb-3"
            >
              <Form.Control name="Subject" placeholder="Subject" required />
            </FloatingLabel>
            <FloatingLabel 
              controlId="floatingTextarea2" 
              label="Message"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                name="Message"
                required
              />
            </FloatingLabel>
            <div className="d-grid" >
              <Button size="lg" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} lg={6} className="d-flex flex-column justify-content-around align-items-center pb-5">
          <h2>Let's get in touch!</h2>
          <div 
            class="badge-base LI-profile-badge" 
            data-locale="en_US" 
            data-size="large" 
            data-theme="light" 
            data-type="HORIZONTAL" 
            data-vanity="meyersamuelc" 
            data-version="v1"
          >
            {/* <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/meyersamuelc?trk=profile-badge">Samuel Meyer</a> */}
          </div>
        </Col>
      </Row>

      <Alert show={dangerShow} variant="danger" onClose={() => setDangerShow(false)} dismissible>
        <Alert.Heading>Something seems to have gone wrong!</Alert.Heading>
        <p>Double check your email and make sure everything looks correct and try again.</p>
        <p>If the problem persists, please feel free to reach out via LinkedIn, and let me know that something has gone wrong here!</p>
      </Alert>
      <Alert show={successShow} variant="success" onClose={() => setSuccessShow(false)} dismissible>
        <Alert.Heading>Email sent successfully!</Alert.Heading>
        <p>Please double check this is your correct email so I can get back to you: {email}</p>
        <p>If something doesn't look correct, please resubmit!</p>
      </Alert>

      
              
    </Container>
  );
};