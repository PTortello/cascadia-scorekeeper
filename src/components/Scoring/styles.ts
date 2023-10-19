import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  padding-inline: 20px;
  background-color: #242424;
`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
  line-height: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  height: 42px;
  width: 140px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  background-color: #c4d4f0;
  color: #000000;
  margin: 10px auto 20px;
`;
