import { data, desiredOutcomeMap, outcomeMap, outcomeScoreMap, throwScoreMap } from "./data";


const totalScore = data.reduce<number>((acc, round) => {
  const [opponentThrow, desiredOutcome] = round;
  const desiredThrow = desiredOutcomeMap[opponentThrow][desiredOutcome];
  const outcome = outcomeMap[opponentThrow][desiredThrow]
  const outcomeScore = outcomeScoreMap[outcome]
  const throwScore = throwScoreMap[desiredThrow]
  const roundScore = outcomeScore + throwScore;

  // console.log({ outcome, outcomeScore, throwScore, roundScore })

  return acc += roundScore;
}, 0)

console.log(totalScore)