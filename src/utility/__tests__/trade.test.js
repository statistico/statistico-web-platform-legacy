import {
  averageRunnerPrice,
  maxDrawdown,
  profit,
  tradeYield,
  winPercentage,
} from '../trade';

const trades = [
  {
    Result: 'SUCCESS',
    RunnerPrice: 5.08,
  },
  {
    Result: 'SUCCESS',
    RunnerPrice: 1.51,
  },
  {
    Result: 'SUCCESS',
    RunnerPrice: 3.25,
  },
  {
    Result: 'FAIL',
    RunnerPrice: 1.23,
  },
  {
    Result: 'FAIL',
    RunnerPrice: 2.08,
  },
  {
    Result: 'SUCCESS',
    RunnerPrice: 1.51,
  },
  {
    Result: 'SUCCESS',
    RunnerPrice: 2.0,
  },
  {
    Result: 'FAIL',
    RunnerPrice: 1.35,
  },
  {
    Result: 'FAIL',
    RunnerPrice: 2.56,
  },
  {
    Result: 'FAIL',
    RunnerPrice: 1.55,
  },
  {
    Result: 'FAIL',
    RunnerPrice: 2.0,
  },
  {
    Result: 'SUCCESS',
    RunnerPrice: 1.93,
  },
];

describe('averageRunnerPrice', () => {
  it('returns average of runner price object field in array', () => {
    const avg = averageRunnerPrice(trades);

    expect(avg).toBe(2.17);
  });
});

describe('maxDrawdown', () => {
  it('returns max drawdown calculation', () => {
    const avg = maxDrawdown(trades);

    expect(avg).toBe(4);
  });
});

describe('profit', () => {
  it('returns profit calculation of trades in array for single unit stake', () => {
    const avg = profit(trades, 1);

    expect(avg).toBe(3.28);
  });

  it('returns profit calculation of trades in array for 2.5 unit stake', () => {
    const avg = profit(trades, 2.5);

    expect(avg).toBe(8.2);
  });
});

describe('tradeYield', () => {
  it('returns yield calculation of trades in array for single unit stake', () => {
    const avg = tradeYield(trades, 1);

    expect(avg).toBe(27.33);
  });
});

describe('winPercentage', () => {
  it('returns win percentage calculation of trades in array', () => {
    const avg = winPercentage(trades);

    expect(avg).toBe(50.0);
  });
})