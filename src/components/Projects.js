import { Card, CardGroup } from "react-bootstrap";

const Projects = () => {
    return (<CardGroup>
        <Card>
          <Card.Header>
            Calculator App
          </Card.Header>
          <Card.Body>A basic calculator using React Hooks.</Card.Body>
          <Card.Footer><a href="/">View {'>>'}</a></Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            Breaking Bad Cast
          </Card.Header>
          <Card.Body>A single page application that lists all characters of the TV series - Breaking Bad. It enlists characters in a paginated manner and allows user to search various characters by their name.</Card.Body>
          <Card.Footer><a href="/">View {'>>'}</a></Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            Portfolio
          </Card.Header>
          <Card.Body>A portfolio app created using React Bootstrap which consists of various details about me.</Card.Body>
          <Card.Footer><a href="/">View {'>>'}</a></Card.Footer>
      </Card>
      <Card>
          <Card.Header>
            Image Compressor
          </Card.Header>
          <Card.Body>An image compressor app created using browser-image-compression.</Card.Body>
          <Card.Footer><a href="/">View {'>>'}</a></Card.Footer>
        </Card>
      </CardGroup>)
}

export default Projects;