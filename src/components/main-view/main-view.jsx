import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Row from "react-bootstrap/Row"

import { NavigationBar } from "../navigation-bar/navigation-bar";
import { AboutView } from "../about-view/about-view";
import { ContactView } from "../contact-view/contact-view";
import { IntroView } from "../intro-view/intro-view";
import { PortfolioView } from "../portfolio-view/portfolio-view";
import { StickyFooter } from "../sticky-footer/sticky-footer";

export const MainView = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Row className="justify-content-md-center main-container">
        <Routes>
          <Route index element={<IntroView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/portfolio" element={<PortfolioView />} />
        </Routes>
      </Row>
      {/* <StickyFooter /> */}
    </BrowserRouter>
  )
}