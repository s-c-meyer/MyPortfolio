import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav, Image, Row, Col, Stack } from "react-bootstrap";


export const StickyFooter = () => {

  function scrollToTop() {
    document.body.scrollTop = 0; //for Safari
    document.documentElement.scrollTop = 0; //for all other browsers
  }

  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <>
      <Container fluid className="footer-container">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={3} className="mb-5 mb-lg-0 mt-5 px-5">
            <Stack>
              <span className="footer-text-title">Current Projects</span>
              <hr className="footer-text"/>
            </Stack>
            <Stack gap={2}>
              <a className="footer-text" href="/portfolio">Cathafire Volunteer Website</a>
              <a className="footer-text" >Meyer's Matchups</a>
            </Stack>
          </Col>
          <Col xs={12} lg={3} className="mb-5 mb-lg-0 mt-5 mx-0 mx-lg-4 px-5">
          <Stack>
            <span className="footer-text-title">Navigate to</span>
            <hr className="footer-text"/>
          </Stack>
            <Stack gap={2}>
              <a className="footer-text" href="/">⌂ Home</a>
              <a className="footer-text" href="/about">🛈 About</a>
              <a className="footer-text" href="/contact">🖅 Contact</a>
              <a className="footer-text" href="/portfolio">✎ My Work</a>
              <a className="footer-text" href="/casestudy">🖳 Case Study</a>
            </Stack>
          </Col>
          <Col xs={12} lg={3} className="mb-5 mb-lg-0 mt-5 px-5">
            <Stack>
              <span className="footer-text-title">Find me here!</span>
              <hr className="footer-text" />
            </Stack>
            <Stack gap={3}>
              {/* used iconfinder.com for all of these icons */}
              <a className="footer-text" href="https://www.linkedin.com/in/meyersamuelc" target="_blank"><svg className="footer-icon" viewBox="0 0 56.693 56.693" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M30.071 27.101v-.077a2.031 2.031 0 0 1-.05.077h.05z" fill="#87b4a9" className="fill-000000"></path><path d="M49.265 4.667H7.145c-2.016 0-3.651 1.596-3.651 3.563v42.613c0 1.966 1.635 3.562 3.651 3.562h42.12c2.019 0 3.654-1.597 3.654-3.562V8.23c0-1.968-1.636-3.563-3.654-3.563zm-30.79 41.637H11.01V23.845h7.465v22.459zm-3.732-25.527h-.05c-2.504 0-4.124-1.725-4.124-3.88 0-2.203 1.67-3.88 4.223-3.88 2.554 0 4.125 1.677 4.175 3.88 0 2.155-1.622 3.88-4.224 3.88zm30.651 25.527h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078-2.062 0-3.29 1.389-3.831 2.731-.197.479-.245 1.149-.245 1.821v12.543h-7.465s.098-20.354 0-22.459h7.465v3.179c.992-1.53 2.766-3.709 6.729-3.709 4.911 0 8.594 3.211 8.594 10.11v12.88z" fill="#87b4a9" className="fill-000000"></path></svg> LinkedIn</a>
              <a className="footer-text" href="https://github.com/s-c-meyer" target="_blank"><svg className="footer-icon" viewBox="-1163 1657.697 56.693 56.693" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M-1134.66 1662.916c-13.6 0-24.63 11.027-24.63 24.63 0 10.882 7.057 20.115 16.844 23.371 1.23.228 1.683-.534 1.683-1.184 0-.587-.023-2.528-.034-4.586-6.852 1.49-8.298-2.906-8.298-2.906-1.12-2.847-2.734-3.604-2.734-3.604-2.235-1.529.168-1.497.168-1.497 2.473.173 3.776 2.538 3.776 2.538 2.196 3.765 5.761 2.677 7.167 2.047.221-1.591.86-2.678 1.564-3.293-5.47-.623-11.222-2.735-11.222-12.172 0-2.69.962-4.886 2.538-6.611-.256-.62-1.099-3.126.239-6.519 0 0 2.068-.661 6.774 2.525 1.965-.545 4.072-.82 6.165-.829 2.093.01 4.202.284 6.17.83 4.701-3.187 6.767-2.526 6.767-2.526 1.34 3.393.497 5.898.241 6.519 1.58 1.725 2.535 3.922 2.535 6.61 0 9.46-5.762 11.544-11.246 12.153.883.765 1.67 2.264 1.67 4.561 0 3.296-.028 5.948-.028 6.76 0 .655.443 1.423 1.691 1.181 9.782-3.26 16.83-12.49 16.83-23.368 0-13.603-11.027-24.63-24.63-24.63z" fill-rule="evenodd" fill="#87b4a9" className="fill-000000"></path><path d="M-1149.961 1698.28c-.054.122-.247.159-.422.075-.18-.08-.28-.248-.221-.37.053-.126.245-.161.424-.077.179.08.28.249.219.371zM-1148.963 1699.392c-.118.109-.348.058-.504-.114-.16-.172-.19-.401-.071-.512.12-.108.343-.057.505.114.16.174.192.402.07.512zM-1147.992 1700.81c-.151.106-.398.007-.55-.212-.152-.219-.152-.482.003-.587.152-.105.396-.01.55.207.15.223.15.485-.003.592zM-1146.662 1702.181c-.135.15-.423.109-.633-.094-.215-.199-.275-.48-.14-.63.137-.149.426-.107.638.095.214.198.279.482.135.63zM-1144.826 1702.977c-.06.193-.337.28-.616.198-.279-.084-.46-.31-.405-.505.058-.194.337-.285.617-.198.279.084.461.309.404.505zM-1142.81 1703.124c.006.203-.23.372-.523.375-.295.007-.533-.157-.536-.357 0-.205.23-.372.525-.377.293-.006.533.158.533.36zM-1140.935 1702.805c.035.198-.169.402-.46.456-.285.053-.55-.07-.586-.267-.036-.203.171-.406.457-.459.291-.05.552.069.589.27zm0 0" fill="#87b4a9" className="fill-000000"></path></svg> Github</a>
              <a className="footer-text" href="https://www.facebook.com/sam.c.meyer/" target="_blank"><svg className="footer-icon" viewBox="0 0 56.693 56.693" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M28.347 5.157c-13.6 0-24.625 11.027-24.625 24.625 0 13.6 11.025 24.623 24.625 24.623s24.625-11.023 24.625-24.623c0-13.598-11.026-24.625-24.625-24.625zm6.517 24.522H30.6v15.207h-6.32V29.679h-3.006V24.31h3.006v-3.479c0-2.49 1.182-6.377 6.379-6.377l4.68.018v5.215h-3.398c-.555 0-1.34.277-1.34 1.461v3.163h4.818l-.555 5.368z" fill="#87b4a9" className="fill-000000"></path></svg> Facebook</a>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className="d-flex justify-content-center mb-4 mt-2">
            <button onClick={scrollToTop} className="to-top-button">Jump to the top ↥</button>
          </Col>
          <Col xs={12} lg={4}></Col>
          <Col xs={12} lg={4} className="d-flex justify-content-center align-items-end mb-4">
            <span className="footer-text">© {currentYear} samuelmeyer.dev</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};