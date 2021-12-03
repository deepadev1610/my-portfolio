import { Accordion } from "react-bootstrap";

const Education = () => {
    return(<Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{color:'#2caeba'}}>Lovely Professional University</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex justify-content-between"><div>Integrated M.Tech-B.Tech in Computer Science</div><div className="small">CGPA: 9.26/10</div></div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header style={{color:'#2caeba'}}>Atomic Energy Central School No.: 4</Accordion.Header>
          <Accordion.Body>
          <div className="d-flex justify-content-between"><div>Senior Secondary</div><div className="small">CGPA: 8.31/10</div></div>
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header style={{color:'#2caeba'}}>Atomic Energy Central School No.: 2</Accordion.Header>
              <Accordion.Body>
                      <div className="d-flex justify-content-between">
                        <div>
                          Secondary
                        </div>
                          <div className="small">
                          CGPA: 10/10
                        </div>
                      </div>
              </Accordion.Body>
        </Accordion.Item>
                </Accordion>)
}

export default Education;