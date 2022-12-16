import { data, priorityMap } from './data';

let prioritySum = 0;

for (let i = 0; i < data.length; i += 3) {
  const firstSack = Array.from(data[i]);
  const secondSack = Array.from(data[i + 1]);
  const thirdSack = Array.from(data[i + 2]);

  firstSack.some(referenceItem => {
    const secondSackMatch = secondSack.indexOf(referenceItem) > -1;
    const thirdSackMatch = thirdSack.indexOf(referenceItem) > -1;
    const threeWayMatch = secondSackMatch && thirdSackMatch
    if (threeWayMatch) {
      prioritySum += priorityMap[referenceItem];
    }
    return threeWayMatch;
  })
}

console.log(prioritySum);
