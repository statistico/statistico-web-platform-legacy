import { StrategyServiceClient } from '../proto/strategy_grpc_web_pb';

const StrategyClient = () => {
  return new StrategyServiceClient('http://localhost:8080', {}, {});
};

export default StrategyClient;
