import { Col, Container, Nav, Offcanvas, Row, Tab, Button, Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTasks, faUniversity } from '@fortawesome/free-solid-svg-icons';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  const [activeTab, setActiveTab] = useState("Projects");
  const tabs = ["Projects", "Experience", "Education"];
  const icons = { "Projects": faTasks, "Experience": faBriefcase, "Education": faUniversity };
  const [show, setShow] = useState(true);

  return (
    <Container>
      <Offcanvas show={show} placement="top" className="p-5">
        <Offcanvas.Header>
          <Offcanvas.Title>
            DEEPA DEVARAJAN
          </Offcanvas.Title>
          <div className="d-flex flex-row">
            <img src="/linkedin.svg" alt="LinkedIn" height="20px" />
            <img src="/github.svg" alt="GitHub" />
              </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
          <div>
              <Card className="p-5"><Card.Body className="h1 mb-5">I design and develop experiences that make people's lives simple.</Card.Body>
              <Card.Footer><Button variant="dark" onClick={()=>setShow(false)}>See My Work</Button></Card.Footer>
              </Card></div>
          
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Row className="d-flex justify-content-center text-center flex-row">
        <div style={{ fontWeight: '700' }} className="h1">
        {activeTab} <FontAwesomeIcon icon={icons[activeTab]}/>
        </div>
        <div style={{borderBottom:'5px solid #2caeba',display:'inline',width:'5%'}}></div>
      </Row>
    <div className="tab-container d-none d-md-block">
      <Tab.Container defaultActiveKey={tabs[0]} onSelect={(activeKey)=>setActiveTab(activeKey)}>
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column my-tab">
        <Nav.Item>
                  <Nav.Link eventKey={tabs[0]}>{tabs[0]}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={tabs[1]}>{tabs[1]}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={tabs[2]}>{tabs[2]}</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
                <Tab.Pane eventKey={tabs[0]}>
                  <Projects/>
        </Tab.Pane>
        <Tab.Pane eventKey={tabs[1]}>
                <Experience/>
        </Tab.Pane>
        <Tab.Pane eventKey={tabs[2]}>
        <Education />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
      </div>
      </Container>
  );
}

export default App;
