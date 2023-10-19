import { useEffect, useState } from "react";
import { HABITAT, TOKENS, WILDLIFE } from "constants/initialValues";
import { setScoreHistory } from "utils/localStorage";
import Header from "components/Header";
import Score from "components/Score";
import Scoring from "components/Scoring";
import Total from "components/Total";

function Scoreboard() {
  const [open, setOpen] = useState(true);
  const [save, setSave] = useState(false);
  const [total, setTotal] = useState(0);
  const [habitatScore, setHabitatScore] = useState(HABITAT);
  const [tokensScore, setTokensScore] = useState(TOKENS);
  const [wildlifeScore, setWildlifeScore] = useState(WILDLIFE);

  const handleReset = () => {
    setHabitatScore(HABITAT);
    setTokensScore(TOKENS);
    setWildlifeScore(WILDLIFE);
    setOpen(true);
  };

  const handleSave = () => {
    const confirmed = confirm("Save score?");
    if (confirmed) {
      setScoreHistory(total);
      setSave(!save);
      handleReset();
      alert("Score saved!");
    }
  };

  const handleHabitatChange = (index: number, newScore: IScore) => {
    const updatedScores = [...habitatScore];
    updatedScores[index] = newScore;
    setHabitatScore(updatedScores);
  };

  const handleWildlifeChange = (index: number, newScore: IScore) => {
    const updatedScores = [...wildlifeScore];
    updatedScores[index] = newScore;
    setWildlifeScore(updatedScores);
  };

  useEffect(() => {
    let updatedTotal = tokensScore.count;
    updatedTotal += habitatScore.reduce((sum, item) => {
      if (item.count > 6) {
        return sum + item.count + 2;
      }
      return sum + item.count;
    }, 0);
    updatedTotal += wildlifeScore.reduce((sum, item) => sum + item.count, 0);
    setTotal(updatedTotal);
  }, [habitatScore, tokensScore, wildlifeScore]);

  return (
    <div>
      <Header save={save} />
      {wildlifeScore.map((score, index) => (
        <Score
          key={index}
          score={score}
          onScoreChange={(newScore) => handleWildlifeChange(index, newScore)}
        />
      ))}
      <hr />
      {habitatScore.map((score, index) => (
        <Score
          key={index}
          bonus={score.count > 6}
          score={score}
          onScoreChange={(newScore) => handleHabitatChange(index, newScore)}
        />
      ))}
      <hr />
      <Score score={tokensScore} onScoreChange={setTokensScore} />
      <hr />
      <Total total={total} onReset={handleReset} onSave={handleSave} />
      {open && <Scoring onClose={() => setOpen(false)} />}
    </div>
  );
}

export default Scoreboard;
