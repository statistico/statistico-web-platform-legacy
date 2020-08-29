import { getTeamStats } from '../gateway/statistico';

const teamStatPresenter = async (payload) => {
  return getTeamStats(payload);
};

export default teamStatPresenter;
