import { Card } from "react-bootstrap";

const Experience = () => {
    return(  <>
        <Card>
            <Card.Header>Work Experience</Card.Header>
            <Card.Body><ul><li>Full Stack Web Developer</li>
              <div className="small" style={{color:'#2caeba'}}>Mobiux Labs | August 2020 - Present</div>
            <p>Feature development, UI revamp, API optimization and debugging. </p></ul></Card.Body>
        </Card>
        <br></br>
          <Card>
            <Card.Header>Internship Details</Card.Header>
            <Card.Body><ul><li>Full Stack Web Developer Intern</li>
              <div className="small" style={{color:'#2caeba'}}>Mobiux Labs | September 2020 - July 2021</div>
              <p>Feature development, UI revamp, API optimization and debugging. </p><li>Front end developer Intern</li>
            <div className="small" style={{color:'#2caeba'}}>Bhabha Atomic Research Centre | May 2019 - July 2019</div><p>Design, development of application interface, testing and integration.</p></ul></Card.Body>
          </Card>
 </>         
)
}

export default Experience;