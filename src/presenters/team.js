import { getTeam, getTeamSeasons } from '../gateway/statistico';

export const teamPresenter = async (id) => {
  const team = await getTeam(id);

  return {
    id: team.id,
    name: team.name,
    logo: team.logo,
  };
};

export const teamSeasonsPresenter = async (id) => {
  const seasons = await getTeamSeasons(id);

  const converted = [];

  seasons.forEach((season) => {
    if (season.name in converted) {
      const s = converted[season.name];
      s.seasonIds.push(season.id);
      return;
    }

    converted[season.name] = {
      current: season.isCurrent,
      seasonIds: [season.id],
    };
  });

  return converted;
};
