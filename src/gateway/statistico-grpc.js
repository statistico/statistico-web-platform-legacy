import { Auth } from 'aws-amplify';
import strategyTradeRequest from './grpc-request';
import StrategyClient from './grpc-client';

const fetchStrategyTrades = async (filters, updateFunc, endFunc, errorFunc) => {
  const token = (await Auth.currentSession()).getAccessToken().getJwtToken();

  const request = strategyTradeRequest(filters);

  const meta = {
    authorization: `bearer ${token}`,
  };

  const stream = StrategyClient().buildStrategy(request, meta);

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
