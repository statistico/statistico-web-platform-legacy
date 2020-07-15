import { getTeamResults } from '../gateway/statistico';

const resultsPresenter = async (payload) => {
  const results = await getTeamResults(payload);

  return results.map((result) => {
    return {
      id: result.id,
      homeTeam: {
        id: result.homeTeam.id,
        name: result.homeTeam.name,
      },
      awayTeam: {
        id: result.awayTeam.id,
        name: result.awayTeam.name,
      },
      venue: result.venue.name,
      date: result.date,
      homeScore: result.stats.homeScore,
      awayScore: result.stats.awayScore,
    };
  });
};

export default resultsPresenter;
