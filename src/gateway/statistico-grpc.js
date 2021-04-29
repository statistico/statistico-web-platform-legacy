import { Auth } from 'aws-amplify';
import { buildStrategyRequest, saveStrategyRequest } from './grpc-request';
import StrategyClient from './grpc-client';

export const buildStrategy = async (
  filters,
  updateFunc,
  endFunc,
  errorFunc
) => {
  const token = (await Auth.currentSession()).getAccessToken().getJwtToken();

  const request = buildStrategyRequest(filters);

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
    console.log(e);
    errorFunc(e);
  });
};

export const saveStrategy = async (
  name,
  description,
  stakingPlan,
  filters,
  visibility,
  onSuccess,
  onFailure
) => {
  const token = (await Auth.currentSession()).getAccessToken().getJwtToken();

  const request = saveStrategyRequest(
    name,
    description,
    stakingPlan,
    filters,
    visibility
  );

  const meta = {
    authorization: `bearer ${token}`,
  };

  StrategyClient().saveStrategy(request, meta, (err, response) => {
    if (err) {
      onFailure(err);
      return;
    }

    onSuccess();
  });
};
