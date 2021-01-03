export const averageRunnerPrice = (trades) => {
  const sum = trades.reduce((prev, cur) => {
    return prev + cur.RunnerPrice;
  }, 0);

  return +(sum / trades.length).toFixed(2);
};

export const maxDrawdown = (trades) => {
  let currentDD = 0;
  let maxDD = 0;

  trades.forEach((trade) => {
    if (trade.Result === 'FAIL') {
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

export const profit = (trades, stake) => {
  const sum = trades.reduce((prev, cur) => {
    const { Result, RunnerPrice } = cur;

    if (Result === 'SUCCESS') {
      return prev + (RunnerPrice * stake - stake);
    }

    return prev - stake;
  }, 0);

  return +sum.toFixed(2);
};

export const tradeYield = (trades, stake) => {
  const p = trades.reduce((prev, cur) => {
    const { Result, RunnerPrice } = cur;

    if (Result === 'SUCCESS') {
      return prev + RunnerPrice;
    }

    return prev;
  }, 0);

  const s = trades.length * stake;

  return +(((p - s) / s) * 100).toFixed(2);
};

export const winPercentage = (trades) => {
  const win = trades.filter((trade) => {
    return trade.Result === 'SUCCESS';
  });

  return +((win.length / trades.length) * 100).toFixed(2);
};
