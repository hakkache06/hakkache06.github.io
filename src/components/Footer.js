import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import headerImg from "../assets/img/G1JO.gif";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <img src={headerImg} alt="Icon" />

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://ma.linkedin.com/in/hakkache-yassine-857362160?trk=public_profile_browsemap"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
            <p>Currently in beta</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
