import { formatSignalScore } from "../src/utils/formatSignalScore";

const testScores = [0.95, 0.75, 0.55, 0.35, 0.1];

console.log("Signal Score Ratings:");
testScores.forEach(score => {
  console.log(`${score}: ${formatSignalScore(score)}`);
});
