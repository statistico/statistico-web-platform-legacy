import {
  averageRunnerPrice,
  maxDrawdown,
  orderByEventDate,
  profit,
  tradeYield,
  winPercentage,
} from '../trade';

const trades = [
  {
    EventDate: '2020-01-01T03:00:00',
    Result: 'SUCCESS',
    RunnerPrice: 5.08,
  },
  {
    EventDate: '2020-01-01T01:00:00',
    Result: 'SUCCESS',
    RunnerPrice: 1.51,
  },
  {
    EventDate: '2020-01-02T02:00:00',
    Result: 'SUCCESS',
    RunnerPrice: 3.25,
  },
  {
    EventDate: '2020-01-02T11:00:00',
    Result: 'FAIL',
    RunnerPrice: 1.23,
  },
  {
    EventDate: '2020-01-02T10:00:00',
    Result: 'FAIL',
    RunnerPrice: 2.08,
  },
  {
    EventDate: '2020-01-03T00:30:00',
    Result: 'SUCCESS',
    RunnerPrice: 1.51,
  },
  {
    EventDate: '2020-01-03T01:00:00',
    Result: 'SUCCESS',
    RunnerPrice: 2.0,
  },
  {
    EventDate: '2020-01-04T20:00:00',
    Result: 'FAIL',
    RunnerPrice: 1.35,
  },
  {
    EventDate: '2020-01-04T10:00:00',
    Result: 'FAIL',
    RunnerPrice: 2.56,
  },
  {
    EventDate: '2020-01-04T08:00:00',
    Result: 'FAIL',
    RunnerPrice: 1.55,
  },
  {
    EventDate: '2020-01-04T16:00:00',
    Result: 'FAIL',
    RunnerPrice: 2.0,
  },
  {
    EventDate: '2019-12-31T01:00:00',
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
});

describe('orderByEventDate', () => {
  it('returns average of runner price object field in array', () => {
    const ordered = orderByEventDate(trades);

    expect(ordered[0].RunnerPrice).toBe(1.93);
    expect(ordered[1].RunnerPrice).toBe(1.51);
    expect(ordered[2].RunnerPrice).toBe(5.08);
    expect(ordered[3].RunnerPrice).toBe(3.25);
    expect(ordered[4].RunnerPrice).toBe(2.08);
    expect(ordered[5].RunnerPrice).toBe(1.23);
    expect(ordered[6].RunnerPrice).toBe(1.51);
    expect(ordered[7].RunnerPrice).toBe(2.0);
    expect(ordered[8].RunnerPrice).toBe(1.55);
    expect(ordered[9].RunnerPrice).toBe(2.56);
    expect(ordered[10].RunnerPrice).toBe(2.0);
    expect(ordered[11].RunnerPrice).toBe(1.35);
  });
});
