export const calculateMedian = (numbers) => {
  // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
  let m = 0;
  const numsLen = numbers.length;
  numbers.sort();

  if (numsLen % 2 === 0) {
    // average of two middle numbers
    m = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
  } else {
    // is odd
    // middle number only
    m = numbers[(numsLen - 1) / 2];
  }

  return m;
};

export const calculateMax = (numbers) => {
  const sorted = numbers.sort((a, b) => a - b);

  return sorted[sorted.length - 1];
};

export const calculateMode = (numbers) => {
  // as result can be bimodal or multi-modal,
  // the returned result is provided as an array
  // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
  const modes = [];
  const count = [];
  let i = 0;
  let number = 0;
  let maxIndex = 0;

  for (i = 0; i < numbers.length; i += 1) {
    number = numbers[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  // Object.prototype.hasOwnProperty.call(foo, "bar")
  for (i in count)
    if (Object.prototype.hasOwnProperty.call(count, i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  return modes;
};
