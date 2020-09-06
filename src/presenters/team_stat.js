import { getTeamStats } from '../gateway/statistico';

const teamStatPresenter = async (payload) => {
  const stats = await getTeamStats(payload);

  return stats.map((stat) => {
    return {
      fixtureId: stat.fixtureId,
      stat: stat.stat,
      value: stat.value,
      homeTeam: stat.result.homeTeam.name,
      awayTeam: stat.result.awayTeam.name,
      date: stat.result.date,
      homeScore: stat.result.stats.homeScore,
      awayScore: stat.result.stats.awayScore,
      venue: stat.result.venue.name,
    };
  });
};

export default teamStatPresenter;
