import ScoreLabel from "components/ScoreLabel";
import {
  Bonus,
  Button,
  Container,
  Display,
  Input,
  ScoreActions,
} from "./styles";

interface ScoreProps {
  bonus?: boolean;
  score: IScore;
  onScoreChange: (newScore: IScore) => void;
}

function Score({ bonus, score, onScoreChange }: ScoreProps) {
  const handleClick = (value: number) => {
    let count = score.count + value;
    count = Math.max(0, count);
    onScoreChange({ ...score, count });
  };

  return (
    <Container>
      <ScoreLabel score={score} />
      <ScoreActions>
        <Button onClick={() => handleClick(-5)}>-5</Button>
        <Button onClick={() => handleClick(-1)}>-1</Button>
        <Display>
          <Input type="number" id={score.label} value={score.count} readOnly />
          {bonus && <Bonus type="number" value={2} readOnly />}
        </Display>
        <Button onClick={() => handleClick(1)}>+1</Button>
        <Button onClick={() => handleClick(5)}>+5</Button>
      </ScoreActions>
    </Container>
  );
}

export default Score;
