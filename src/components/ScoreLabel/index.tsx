import { Container, Label } from "./styles";

interface ScoreLabelProps {
  score: IScore;
}

function ScoreLabel({ score }: ScoreLabelProps) {
  return (
    <Container>
      <img src={score.image} width={25} />
      <Label>{score.label}</Label>
    </Container>
  );
}

export default ScoreLabel;
