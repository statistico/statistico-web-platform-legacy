import { StrategyServiceClient } from '../proto/strategy_grpc_web_pb';

const StrategyClient = () => new StrategyServiceClient(
  process.env.REACT_APP_STATISTICO_SERVICES_HOST,
  null,
  null,
);

export default StrategyClient;
