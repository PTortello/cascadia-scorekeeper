import { WILDLIFE } from "constants/initialValues";
import ScoreLabel from "components/ScoreLabel";
import { Button, Container, Content, Row, Title } from "./styles";

interface ScoringProps {
  onClose: () => void;
}

function Scoring({ onClose }: ScoringProps) {
  return (
    <Container>
      <Content>
        <Title>Suggested Scoring Cards</Title>
        {WILDLIFE.map((score, index) => (
          <Row key={index}>
            <ScoreLabel score={score} />
            {String.fromCharCode(65 + Math.floor(Math.random() * 4))}
          </Row>
        ))}
        <Button onClick={onClose}>Close</Button>
      </Content>
    </Container>
  );
}

export default Scoring;
