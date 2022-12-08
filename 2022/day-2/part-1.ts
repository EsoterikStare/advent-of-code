import { data, outcomeMap, outcomeScoreMap, throwScoreMap } from "./data";


const totalScore = data.reduce<number>((acc, round) => {
  const [opponentThrow, myThrow] = round;
  const outcome = outcomeMap[opponentThrow][myThrow]
  const outcomeScore = outcomeScoreMap[outcome]
  const throwScore = throwScoreMap[myThrow]
  const roundScore = outcomeScore + throwScore;

  // console.log({ outcome, outcomeScore, throwScore, roundScore })

  return acc += roundScore;
}, 0)

console.log(totalScore)