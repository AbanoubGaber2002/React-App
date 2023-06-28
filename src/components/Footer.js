import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../image/img/logo.svg";
import navIcon1 from "../image/img/nav-icon1.svg";
import navIcon2 from "../image/img/nav-icon2.svg";
import navIcon3 from "../image/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abanoub-gaber-69b872223/"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p> --Copyrights 2023--  All Rights Reserved here By Abanoub Gaber Zikry </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
