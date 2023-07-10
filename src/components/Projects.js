
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/best-illustrator.jpg";
import projImg2 from "../assets/img/1jpg.jpg";
import projImg3 from "../assets/img/project-img2.jpeg";


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "1337 SCHOOL PROJECTS",
      description: "Web, Network, Unix, Algorithms",
      imgUrl: projImg3,
      tag: "hello worlds"
    },
    {
      title: "PERSONAL SIDE PROJECTS",
      description: "Machine Learning ,Web Backend, Devops, Mobile",
      imgUrl: projImg1,
    },
    {
      title: "PROFESSIONAL PROJECTS",
      description: "Web Backend",
      imgUrl: projImg2,
    },
  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={4}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science , Machine Learning projects and deploy them to web applications using cloud infrastructure.</p>
                <p></p>
                <br></br>
                <br></br>
                <br></br>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}