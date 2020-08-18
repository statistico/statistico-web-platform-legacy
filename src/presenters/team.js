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
    const filtered = converted.filter((s) => s.name === season.name);

    if (filtered.length > 0) {
      filtered[0].seasonIds.push(season.id);
      return;
    }

    const obj = {
      name: season.name,
      current: season.isCurrent,
      seasonIds: [season.id],
    };

    converted.push(obj);
  });

  return converted;
};
