import { calculateMax, calculateMedian, calculateMode } from '../calculator';

describe('calculateMax', () => {
  it('returns the highest value in array', () => {
    const values = [10, 5, 27, 40, 2];

    const max = calculateMax(values);

    expect(max).toBe(40);
  });
});

describe('calculateMedian', () => {
  it('returns the median value from an array of integers', () => {
    const values = [10, 5, 27, 40, 2];

    const median = calculateMedian(values);

    expect(median).toBe(10);
  });
});

describe('calculateMode', () => {
  it('returns an array of integers containing most most frequent numbers', () => {
    const values = [10, 5, 27, 40, 2, 2, 5, 5];

    const mode = calculateMode(values);

    expect(mode).toEqual([5]);
  });

  it('returns an array containing more than one integer', () => {
    const values = [2, 10, 5, 27, 40, 2, 2, 5, 5];

    const mode = calculateMode(values);

    expect(mode).toEqual([2, 5]);
  });
});
