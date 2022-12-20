import { data } from './data';

const fullyContainedCount = data.reduce<number>((acc, rangePairs) => {
  const [firstRangePair, secondRangePair] = rangePairs;

  const [firstRangeStart, firstRangeEnd] = firstRangePair;
  const [secondRangeStart, secondRangeEnd] = secondRangePair;

  const firstPairContainsSecond = firstRangeStart <= secondRangeStart && firstRangeEnd >= secondRangeEnd;
  const secondPairContainsFirst = secondRangeStart <= firstRangeStart && secondRangeEnd >= firstRangeEnd;

  if (firstPairContainsSecond || secondPairContainsFirst) {
    acc += 1;
  }
  return acc;
}, 0)

console.log(fullyContainedCount)