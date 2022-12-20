import { data, generateIntRange } from './data';

const overlapCount = data.reduce<number>((acc, rangePairs) => {
  const [firstRangePair, secondRangePair] = rangePairs;

  const [firstRangeStart, firstRangeEnd] = firstRangePair;
  const [secondRangeStart, secondRangeEnd] = secondRangePair;

  const firstRange = generateIntRange(firstRangeStart, firstRangeEnd);
  const secondRange = generateIntRange(secondRangeStart, secondRangeEnd);

  const anyOverlap = firstRange.some(firstVal => secondRange.includes(firstVal))
  
  if (anyOverlap) {
    acc += 1;
  }
  return acc;
}, 0)

console.log(overlapCount)