const KEY = "cascadiaScorekeeper";

export const getScoreHistory = (): IScore[] => {
  return JSON.parse(localStorage.getItem(KEY) ?? "[]");
};

export const setScoreHistory = (total: number) => {
  const scoreHistory = getScoreHistory();
  scoreHistory.push({
    count: total,
    image: "",
    label: new Date().toString(),
  });
  localStorage.setItem(KEY, JSON.stringify(scoreHistory));
};
