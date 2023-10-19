import { useEffect, useState } from "react";
import { getScoreHistory } from "utils/localStorage";
import { Container, Label, Title } from "./styles";

interface HeaderProps {
  save: boolean;
}

function Header({ save }: HeaderProps) {
  const [avg, setAvg] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const data = getScoreHistory();
    if (data.length) {
      const total = data.reduce((sum, el) => sum + el.count, 0);
      setAvg(Math.round(total / data.length));
      setMax(
        data.reduce((prev, current) =>
          prev && prev.count > current.count ? prev : current
        ).count
      );
    }
  }, [save]);

  return (
    <Container>
      <Title>Cascadia Scorekeeper</Title>
      <div>
        <Label>{`Best: ${max}`}</Label>
        <Label>{`Avg: ${avg}`}</Label>
      </div>
    </Container>
  );
}

export default Header;
