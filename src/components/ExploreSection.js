import { Container, Row } from "reactstrap"
import ExplorePanel from "./ExplorePanel"

const ExploreSection = () => {
  return (
      <Container id='explore'>
          <Row>
              <ExplorePanel header="Categories" />
              <ExplorePanel header="Guides" />
          </Row>
      </Container>
  );
}

export default ExploreSection