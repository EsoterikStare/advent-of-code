import { getSortedList } from './part-1';

const topThreeSum = getSortedList().slice(0, 3).reduce((acc, value) => { return acc += value }, 0);

console.log(topThreeSum)