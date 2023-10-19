import { Button, Container, Label, SaveButton } from "./styles";

interface TotalProps {
  total: number;
  onReset: () => void;
  onSave: () => void;
}

function Total({ total, onReset, onSave }: TotalProps) {
  return (
    <Container>
      <Button onClick={onReset}>Reset score</Button>
      <Label>Total: {total}</Label>
      <SaveButton onClick={onSave}>Save</SaveButton>
    </Container>
  );
}

export default Total;
