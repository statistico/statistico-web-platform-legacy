import strategyTradeRequest from './grpc-request';
import { StrategyServiceClient } from '../proto/strategy_grpc_web_pb';

const fetchStrategyTrades = (filters, updateFunc, endFunc, errorFunc) => {
  const request = strategyTradeRequest(filters);

  const client = new StrategyServiceClient('http://localhost:8080', {}, {});

  const stream = client.strategyTradeSearch(request, {});

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
