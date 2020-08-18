import { getTeam, getTeamSeasons } from '../../gateway/statistico';

import { teamPresenter, teamSeasonsPresenter } from '../team';

jest.mock('../../gateway/statistico');

describe('teamPresenter', () => {
  it('returns an object containing team data', async () => {
    const fetched = {
      id: 1,
      name: 'West Ham United',
      logo: 'https://logo.png',
    };

    getTeam.mockImplementationOnce(() => Promise.resolve(fetched));

    const team = await teamPresenter(1);

    await expect(team.id).toBe(1);
    await expect(team.name).toBe('West Ham United');
    await expect(team.logo).toBe('https://logo.png');
  });
});

describe('teamSeasonsPresenter', () => {
  it('returns an array of season objects', async () => {
    const fetched = [
      {
        id: 1,
        isCurrent: true,
        name: '2019/2020',
      },
      {
        id: 2,
        isCurrent: true,
        name: '2019/2020',
      },
      {
        id: 3,
        isCurrent: false,
        name: '2018/2019',
      },
      {
        id: 4,
        isCurrent: false,
        name: '2017/2018',
      },
    ];

    getTeamSeasons.mockImplementationOnce(() => Promise.resolve(fetched));

    const seasons = await teamSeasonsPresenter(1);

    const one = {
      current: true,
      seasonIds: [1, 2],
    };

    const two = {
      current: false,
      seasonIds: [3],
    };

    const three = {
      current: false,
      seasonIds: [4],
    };

    await expect(seasons['2019/2020']).toEqual(one);
    await expect(seasons['2018/2019']).toEqual(two);
    await expect(seasons['2017/2018']).toEqual(three);
  });
});
