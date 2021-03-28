import strategyTradeRequest from './grpc-request';
import StrategyClient from './grpc-client';

const fetchStrategyTrades = (filters, updateFunc, endFunc, errorFunc) => {
  const request = strategyTradeRequest(filters);

  const stream = StrategyClient().buildStrategy(request, {});

  stream.on('data', (t) => {
    updateFunc(t.toObject());
  });

  stream.on('end', () => {
    endFunc();
  });

  stream.on('error', (e) => {
    errorFunc(e);
  });
};

export default fetchStrategyTrades;
