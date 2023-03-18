import { Container, Row } from "reactstrap"
import ExplorePanel from "./ExplorePanel"

const ExploreSection = () => {
  return (
      <Container id='explore'>
          <Row>
              <ExplorePanel header="Categories" id={0} />
              <ExplorePanel header="Guides" id={1} />
          </Row>
      </Container>
  );
}

export default ExploreSection