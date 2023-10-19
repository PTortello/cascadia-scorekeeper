import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const ScoreActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Display = styled.div`
  position: relative;
`;

export const Button = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  font-size: 14px;
  font-weight: bold;
  background-color: #c4d4f0;
  color: #000000;
`;

export const Input = styled.input`
  height: 36px;
  width: 50px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.87);
  color: #000000;
`;

export const Bonus = styled.input`
  position: absolute;
  right: -10px;
  bottom: 0px;
  height: 24px;
  width: 24px;
  border: 0;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0);
  color: #000000;
`;
