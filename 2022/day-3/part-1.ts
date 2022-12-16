import { data, priorityMap } from './data';

interface ContentSet {
  firstHalf: Set<string>;
  secondHalf: Set<string>;
}

const findCommonItem = ({ firstHalf, secondHalf }: ContentSet) => {
  const commonItems: string[] = [];
  firstHalf.forEach(item => {
    if (secondHalf.has(item)) {
      commonItems.push(item);
    }
  })
  return commonItems[0];
};

const prioritySum = data.reduce<number>((acc, ruckSackContents) => {
  const contentArray = Array.from(ruckSackContents);
  const contentSet: ContentSet = {
    firstHalf: new Set(),
    secondHalf: new Set(),
  };
  
  contentArray.forEach((item, index) => {
    const isFirstHalf = (index + 1) <= contentArray.length / 2;
    // console.log({ item, index, isFirstHalf, rLen: ruckSackContents.length, aLen: contentArray.length })
    if (isFirstHalf) {
      contentSet.firstHalf.add(item);
    } else {
      contentSet.secondHalf.add(item);
    }
  })

  acc += priorityMap[findCommonItem(contentSet)];
  return acc;
}, 0)


console.log(prioritySum);

