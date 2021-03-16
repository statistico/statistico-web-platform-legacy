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
    eventDate: {
      seconds: 5,
    },
    result: 1,
    runnerPrice: 5.08,
  },
  {
    competitionId: 100,
    eventDate: {
      seconds: 2,
    },
    result: 1,
    runnerPrice: 1.51,
  },
  {
    competitionId: 55,
    eventDate: {
      seconds: 8,
    },
    result: 1,
    runnerPrice: 3.25,
  },
  {
    competitionId: 55,
    eventDate: {
      seconds: 6,
    },
    result: 0,
    runnerPrice: 1.23,
  },
  {
    competitionId: 2,
    eventDate: {
      seconds: 4,
    },
    result: 0,
    runnerPrice: 2.08,
  },
  {
    competitionId: 15,
    eventDate: {
      seconds: 7,
    },
    result: 1,
    runnerPrice: 1.51,
  },
  {
    competitionId: 550,
    eventDate: {
      seconds: 10,
    },
    result: 1,
    runnerPrice: 2.0,
  },
  {
    competitionId: 20,
    eventDate: {
      seconds: 3,
    },
    result: 0,
    runnerPrice: 1.35,
  },
  {
    competitionId: 1,
    eventDate: {
      seconds: 9,
    },
    result: 0,
    runnerPrice: 2.56,
  },
  {
    competitionId: 2,
    eventDate: {
      seconds: 11,
    },
    result: 0,
    runnerPrice: 1.55,
  },
  {
    competitionId: 1,
    eventDate: {
      seconds: 12,
    },
    result: 0,
    runnerPrice: 2.0,
  },
  {
    competitionId: 10,
    eventDate: {
      seconds: 1,
    },
    result: 1,
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
  it('returns profit calculation of trades in array for single unit stake for back trades', () => {
    const avg = profit(trades, 1, 'BACK');

    expect(avg).toBe(3.28);
  });

  it('returns profit calculation of trades in array for single unit stake for lay trades', () => {
    const avg = profit(trades, 1, 'LAY');

    expect(avg).toBe(1.23);
  });

  it('returns profit calculation of trades in array for 2.5 unit stake for back trades', () => {
    const avg = profit(trades, 2.5, 'BACK');

    expect(avg).toBe(8.2);
  });

  it('returns profit calculation of trades in array for 2.5 unit stake for lay trades', () => {
    const avg = profit(trades, 2.5, 'LAY');

    expect(avg).toBe(3.07);
  });
});

describe('tradeYield', () => {
  it('returns yield calculation of trades in array for single unit stake for back trades', () => {
    const avg = tradeYield(trades, 1, 'BACK');

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
  it('returns trades order by event date', () => {
    const ordered = orderByEventDate(trades);

    expect(ordered[0].runnerPrice).toBe(1.93);
    expect(ordered[1].runnerPrice).toBe(1.51);
    expect(ordered[2].runnerPrice).toBe(1.35);
    expect(ordered[3].runnerPrice).toBe(2.08);
    expect(ordered[4].runnerPrice).toBe(5.08);
    expect(ordered[5].runnerPrice).toBe(1.23);
    expect(ordered[6].runnerPrice).toBe(1.51);
    expect(ordered[7].runnerPrice).toBe(3.25);
    expect(ordered[8].runnerPrice).toBe(2.56);
    expect(ordered[9].runnerPrice).toBe(2.0);
    expect(ordered[10].runnerPrice).toBe(1.55);
    expect(ordered[11].runnerPrice).toBe(2.0);
  });
});

describe('cumulativeProfit', () => {
  it('returns an array of objects containing the cumulative profit total for back trades', () => {
    const totals = cumulativeProfit(trades, 1, 'BACK');

    expect(totals[0].profit).toBe(0.9299999999999999);
    expect(totals[1].profit).toBe(1.44);
    expect(totals[2].profit).toBe(0.43999999999999995);
    expect(totals[3].profit).toBe(-0.56);
    expect(totals[4].profit).toBe(3.52);
    expect(totals[5].profit).toBe(2.52);
    expect(totals[6].profit).toBe(3.0300000000000002);
    expect(totals[7].profit).toBe(5.28);
    expect(totals[8].profit).toBe(4.28);
    expect(totals[9].profit).toBe(5.28);
    expect(totals[10].profit).toBe(4.28);
    expect(totals[11].profit).toBe(3.2800000000000002);
  });

  it('returns an array of objects containing the cumulative profit total for lay trades', () => {
    const totals = cumulativeProfit(trades, 1, 'LAY');

    expect(totals[0].profit).toBe(1);
    expect(totals[1].profit).toBe(2);
    expect(totals[2].profit).toBe(1.65);
    expect(totals[3].profit).toBe(0.5699999999999998);
    expect(totals[4].profit).toBe(1.5699999999999998);
    expect(totals[5].profit).toBe(1.3399999999999999);
    expect(totals[6].profit).toBe(2.34);
    expect(totals[7].profit).toBe(3.34);
    expect(totals[8].profit).toBe(1.7799999999999998);
    expect(totals[9].profit).toBe(2.78);
    expect(totals[10].profit).toBe(2.2299999999999995);
    expect(totals[11].profit).toBe(1.2299999999999995);
  });
});

describe('filterByCompetition', () => {
  it('returns an array of objects containing trades for a specific competition', () => {
    const filtered = filterByCompetition(trades, 55);

    expect(filtered.length).toBe(3);
  });
});
