import { getTeam } from '../gateway/statistico';

const teamPresenter = async (id) => {
  const team = await getTeam(id);

  return {
    id: team.id,
    name: team.name,
    logo: team.logo,
  };
};

export default teamPresenter;
