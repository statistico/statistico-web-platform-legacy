export const averageRunnerPrice = (trades) => {
  const sum = trades.reduce((prev, cur) => {
    return prev + cur.runnerPrice;
  }, 0);

  return +(sum / trades.length).toFixed(2);
};

export const cumulativeProfit = (trades, stake, side) => {
  let total = 0;

  return trades.map((trade) => {
    if (side === 'BACK') {
      total += trade.result === 1 ? trade.runnerPrice * stake - stake : -stake;
    }

    if (side === 'LAY') {
      total += trade.result === 1 ? stake : trade.runnerPrice * stake - stake;
    }

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

export const profit = (trades, stake, side) => {
  const sum = trades.reduce((prev, cur) => {
    const { result, runnerPrice } = cur;

    if (result === 1) {
      if (side === 'BACK') {
        return prev + (runnerPrice * stake - stake);
      }

      if (side === 'LAY') {
        return prev + stake;
      }
    }

    if (side === 'BACK') {
      return prev - stake;
    }

    return prev - (runnerPrice * stake - stake);
  }, 0);

  return +sum.toFixed(2);
};

export const tradeYield = (trades, stake, side) => {
  const p = profit(trades, stake, side);

  const s = trades.length * stake;

  return +((p / s) * 100).toFixed(2);
};

export const winPercentage = (trades) => {
  const win = trades.filter((trade) => {
    return trade.result === 1;
  });

  return Math.round((win.length / trades.length) * 100);
};
