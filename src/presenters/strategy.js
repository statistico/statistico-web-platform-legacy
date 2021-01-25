import { buildStrategy } from '../gateway/statistico';

const buildStrategyPresenter = async (payload) => {
  const trades = await buildStrategy(payload);

  return trades.map((trade) => {
    return {
      competitionId: trade.competitionId,
      eventDate: trade.eventDate,
      result: trade.result,
      runnerPrice: trade.runnerPrice,
    };
  });
};

export default buildStrategyPresenter;
