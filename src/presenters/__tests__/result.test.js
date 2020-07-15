import { getTeamResults } from '../../gateway/statistico';

import resultsPresenter from '../result';

jest.mock('../../gateway/statistico');

describe('resultsPresenter', () => {
  it('returns an object containing team data', async () => {
    const fetched = [
      {
        id: 129810,
        homeTeam: {
          id: 1,
          name: 'West Ham United',
        },
        awayTeam: {
          id: 14,
          name: 'Arsenal',
        },
        venue: {
          name: 'London Stadium',
        },
        date: '2020-03-12T15:00:00+00',
        stats: {
          homeScore: 3,
          awayScore: 1,
        },
      },
    ];

    getTeamResults.mockImplementationOnce(() => Promise.resolve(fetched));

    const results = await resultsPresenter(1);

    const result = results[0];

    await expect(result.id).toBe(129810);
    await expect(result.homeTeam.id).toBe(1);
    await expect(result.homeTeam.name).toBe('West Ham United');
    await expect(result.awayTeam.id).toBe(14);
    await expect(result.awayTeam.name).toBe('Arsenal');
    await expect(result.venue).toBe('London Stadium');
    await expect(result.date).toBe('2020-03-12T15:00:00+00');
    await expect(result.homeScore).toBe(3);
    await expect(result.awayScore).toBe(1);
  });
});
