import {
  averageRunnerPrice,
  cumulativeProfit,
  filterByCompetition,
  maxDrawdown,
  orderByEventDate,
  profit,
  tradeYield,
  winPercentage,
} from '../trade';

const trades = [
  {
    competitionId: 55,
    eventDate: '2020-01-01T03:00:00',
    result: 'SUCCESS',
    runnerPrice: 5.08,
  },
  {
    competitionId: 100,
    eventDate: '2020-01-01T01:00:00',
    result: 'SUCCESS',
    runnerPrice: 1.51,
  },
  {
    competitionId: 55,
    eventDate: '2020-01-02T02:00:00',
    result: 'SUCCESS',
    runnerPrice: 3.25,
  },
  {
    competitionId: 55,
    eventDate: '2020-01-02T11:00:00',
    result: 'FAIL',
    runnerPrice: 1.23,
  },
  {
    competitionId: 2,
    eventDate: '2020-01-02T10:00:00',
    result: 'FAIL',
    runnerPrice: 2.08,
  },
  {
    competitionId: 15,
    eventDate: '2020-01-03T00:30:00',
    result: 'SUCCESS',
    runnerPrice: 1.51,
  },
  {
    competitionId: 550,
    eventDate: '2020-01-03T01:00:00',
    result: 'SUCCESS',
    runnerPrice: 2.0,
  },
  {
    competitionId: 20,
    eventDate: '2020-01-04T20:00:00',
    result: 'FAIL',
    runnerPrice: 1.35,
  },
  {
    competitionId: 1,
    eventDate: '2020-01-04T10:00:00',
    result: 'FAIL',
    runnerPrice: 2.56,
  },
  {
    competitionId: 2,
    eventDate: '2020-01-04T08:00:00',
    result: 'FAIL',
    runnerPrice: 1.55,
  },
  {
    competitionId: 1,
    eventDate: '2020-01-04T16:00:00',
    result: 'FAIL',
    runnerPrice: 2.0,
  },
  {
    competitionId: 10,
    eventDate: '2019-12-31T01:00:00',
    result: 'SUCCESS',
    runnerPrice: 1.93,
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

    expect(ordered[0].runnerPrice).toBe(1.93);
    expect(ordered[1].runnerPrice).toBe(1.51);
    expect(ordered[2].runnerPrice).toBe(5.08);
    expect(ordered[3].runnerPrice).toBe(3.25);
    expect(ordered[4].runnerPrice).toBe(2.08);
    expect(ordered[5].runnerPrice).toBe(1.23);
    expect(ordered[6].runnerPrice).toBe(1.51);
    expect(ordered[7].runnerPrice).toBe(2.0);
    expect(ordered[8].runnerPrice).toBe(1.55);
    expect(ordered[9].runnerPrice).toBe(2.56);
    expect(ordered[10].runnerPrice).toBe(2.0);
    expect(ordered[11].runnerPrice).toBe(1.35);
  });
});

describe('cumulativeProfit', () => {
  it('returns an array of objects containing the cumulative profit total', () => {
    const totals = cumulativeProfit(trades, 1);

    expect(totals[0].profit).toBe(4.08);
    expect(totals[1].profit).toBe(4.59);
    expect(totals[2].profit).toBe(6.84);
    expect(totals[3].profit).toBe(5.84);
    expect(totals[4].profit).toBe(4.84);
    expect(totals[5].profit).toBe(5.35);
    expect(totals[6].profit).toBe(6.35);
    expect(totals[7].profit).toBe(5.35);
    expect(totals[8].profit).toBe(4.35);
    expect(totals[9].profit).toBe(3.3499999999999996);
    expect(totals[10].profit).toBe(2.3499999999999996);
    expect(totals[11].profit).toBe(3.2799999999999994);
  });
});

describe('filterByCompetition', () => {
  it('returns an array of objects containing trades for a specific competition', () => {
    const filtered = filterByCompetition(trades, 55);

    expect(filtered.length).toBe(3);
  });
});
