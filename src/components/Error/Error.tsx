import { useHistory } from "react-router-dom";
import { Button, Container, Hero, Subtitle, Title } from "../bulma"

export const Error = () => {
  const history = useHistory();

  return (
    <Hero className="is-fullheight">
      <Hero.Body className="has-text-centered">
        <Container>
          <Title size={1}>404</Title>
          <Subtitle size={5}>The page you are looking for was not found.</Subtitle>
          <Button className="is-primary" onClick={() => history.push('/')}>Back to Home</Button>
        </Container>
      </Hero.Body>
    </Hero>
  )
}