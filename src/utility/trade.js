export const averageRunnerPrice = (trades) => {
  const sum = trades.reduce((prev, cur) => {
    return prev + cur.runnerPrice;
  }, 0);

  return +(sum / trades.length).toFixed(2);
};

export const cumulativeProfit = (trades, stake) => {
  let total = 0;

  return trades.map((trade) => {
    total +=
      trade.result === 'SUCCESS' ? trade.runnerPrice * stake - stake : -stake;

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

export const maxDrawdown = (trades) => {
  let currentDD = 0;
  let maxDD = 0;

  trades.forEach((trade) => {
    if (trade.result === 'FAIL') {
      currentDD += 1;
      return;
    }

    if (currentDD > maxDD) {
      maxDD = currentDD;
    }

    currentDD = 0;
  });

  return maxDD;
};

export const orderByEventDate = (trades) => {
  const t = trades.map((trade) => {
    return {
      ...trade,
      eventDate: new Date(trade.eventDate),
    };
  });

  return t.slice().sort((a, b) => a.eventDate - b.eventDate);
};

export const profit = (trades, stake) => {
  const sum = trades.reduce((prev, cur) => {
    const { result, runnerPrice } = cur;

    if (result === 'SUCCESS') {
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
    return trade.result === 'SUCCESS';
  });

  return Math.round((win.length / trades.length) * 100);
};
