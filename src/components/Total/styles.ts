import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.button`
  height: 42px;
  width: 140px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  background-color: #c4d4f0;
  color: #000000;
`;

export const SaveButton = styled(Button)`
  width: 70px;
`;
