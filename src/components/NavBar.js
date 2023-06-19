import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import headerImg from "../assets/img/Ab7p.gif";


import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <div className="test">
            <img src={headerImg}  alt="Logo" />
            </div>

          </Navbar.Brand>
        </Container>
      </Navbar>
    </Router>
  )
}