import { getTeam } from '../../gateway/statistico';

import teamPresenter from '../team';

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
