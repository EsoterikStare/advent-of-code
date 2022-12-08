import data from './data';

type Data = typeof data;

interface Acc {
  current: number;
  list: number[];
} 

export const accumulateContiguousIntegers = (data: Data) => {
  const accData = data.reduce<Acc>((acc, datum): Acc => {
    if (datum) {
      acc.current += datum;
      return acc;
    }

    acc.list.push(acc.current);
    acc.current = 0;
    return acc;
  }, { current: 0, list: [] })
  
  return accData.list;
};

export const desc = (a: number, b: number) => {
  if (a < b) return 1;
  return -1;
}

export const getSortedList = () => {
  return accumulateContiguousIntegers(data).sort(desc);
}

console.log(getSortedList()[0]);
