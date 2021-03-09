export const averageRunnerPrice = (trades) => {
  const sum = trades.reduce((prev, cur) => {
    return prev + cur.runnerPrice;
  }, 0);

  return +(sum / trades.length).toFixed(2);
};

export const cumulativeProfit = (trades, stake) => {
  let total = 0;

  return trades.map((trade) => {
    total += trade.result === 1 ? trade.runnerPrice * stake - stake : -stake;

    return {
      ...trade,
      profit: total,
    };
  });
};

export const filterByCompetition = (trades, id) => {
  return trades.filter((trade) => {
    const { competitionId } = trade;
    return competitionId === id;
  });
};

export const filterBySeason = (trades, id) => {
  return trades.filter((trade) => {
    const { seasonId } = trade;
    return seasonId === id;
  });
};

export const maxDrawdown = (trades) => {
  let current = 0;
  let max = 0;

  trades.forEach((trade) => {
    if (trade.result === 0) {
      current += 1;
    }

    if (trade.result === 1) {
      current = 0;
    }

    if (current > max) {
      max = current;
    }
  });

  return max;
};

export const orderByEventDate = (trades) => {
  return trades.sort((a, b) => a.eventDate.seconds - b.eventDate.seconds);
};

export const profit = (trades, stake) => {
  const sum = trades.reduce((prev, cur) => {
    const { result, runnerPrice } = cur;

    if (result === 1) {
      return prev + (runnerPrice * stake - stake);
    }

    return prev - stake;
  }, 0);

  return +sum.toFixed(2);
};

export const tradeYield = (trades, stake) => {
  const p = profit(trades, stake);

  const s = trades.length * stake;

  return +((p / s) * 100).toFixed(2);
};

export const winPercentage = (trades) => {
  const win = trades.filter((trade) => {
    return trade.result === 1;
  });

  return Math.round((win.length / trades.length) * 100);
};
