import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import arana from "../assets/img/unnamed.jpg";


export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  //Software Engineering Student interested in learning ML and Backend Web Dev
  const toRotate = [ "Digital Technologies Architecture Student", "interested in learning ML and Backend Web Dev", "" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>


        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Yassine Hakkache`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am currently a student in Digital Technologies Architecture at <a href="https://1337.ma/en/benguerir/">1337-BG.</a>
                  I'm very interested in learning System Administration and IT Infrastructure Services in a more professional setting and getting more experience in this field.
I'm also learning more about Web Development (Backend) using the NestJS, Django Stack and looking to improve my skills in Spring Boot Framework.. </p>           
           <p>I am looking for an Internship in the Web Development field. I've been using a variety of programming languages and technologies, including Java, ShellScript,  GIT, Kubernetes, NestJS, Spring Boot, PostgreSQL, Docker, and Docker-compose ...</p>
           <p>Click on the image to view CV</p>
           <p>Open to new opportunities : Yes</p>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                 <a href="https://drive.google.com/file/d/1hFAOCg42iGBi-g1H9vo0EfA2lKiEnVuH/view?usp=sharing"> <img src={arana} alt="Icon" /></a>
         
                </div>}
                
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
      
    </section>
  )
}
