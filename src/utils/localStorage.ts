export const getScoreHistory = (): IScore[] => {
  return JSON.parse(localStorage.getItem("scoreHistory") ?? "[]");
};

export const setScoreHistory = (total: number) => {
  const scoreHistory = getScoreHistory();
  scoreHistory.push({
    count: total,
    image: "",
    label: new Date().toString(),
  });
  localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
};
