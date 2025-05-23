import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.jpg";
import projImg4 from "../assets/img/project4.jpg";
import projImg5 from "../assets/img/project2.jpg";
import projImg6 from "../assets/img/project3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Smart Locker",
      description: "Design & Api Development",
      imgUrl: projImg1,
    },
    {
      title: "Field Team Tracking App",
      description: "Design & Api Development",
      imgUrl: projImg2,
    },
    {
      title: "Robot Manager",
      description: "Design & Api Development",
      imgUrl: projImg3,
    },
    {
      title: "NanoStore Manager",
      description: "Design & Api Development",
      imgUrl: projImg5,
    },
    {
      title: "Report Manager",
      description: "Web Design & RestApi Framework",
      imgUrl: projImg6,
    },
    {
      title: "Wireless Controller Testing",
      description: "Testing & System Optimization",
      imgUrl: projImg4,
    },
  ];

  // Split the projects into two groups: first 3 for Tab 1, and the rest for Tab 2
  const tab1Projects = projects.slice(0, 3); // First 3 projects
  const tab2Projects = projects.slice(3);    // Remaining 3 projects

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>This project demonstrates skills in building scalable APIs, automating workflows with Python, and developing user-friendly web solutions. The focus is on delivering efficient, innovative systems to address real-world challenges.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            tab1Projects.map((project, index) => {
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
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            tab2Projects.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
                        <p>Upcoming Project...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
