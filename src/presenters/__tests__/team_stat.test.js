import teamStatPresenter from '../team_stat';
import { getTeamStats } from '../../gateway/statistico';

jest.mock('../../gateway/statistico');

describe('teamStatPresenter', () => {
  it('returns an array of team stat object data', async () => {
    const fetched = [
      {
        fixtureId: 11867603,
        result: {
          id: 11867603,
          homeTeam: {
            id: 20,
            name: 'Newcastle United',
            shortCode: 'NEW',
            countryId: 462,
            venueId: 449,
            nationalTeam: false,
            founded: 1892,
            logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/20.png'
          },
          awayTeam: {
            id: 8,
            name: 'Liverpool',
            shortCode: 'LIV',
            countryId: 462,
            venueId: 230,
            nationalTeam: false,
            founded: 1892,
            logo: 'https://cdn.sportmonks.com/images//soccer/teams/8/8.png'
          },
          season: {
            id: 16036,
            name: '2019/2020',
            isCurrent: false,
          },
          round: {
            id: 169689,
            name: '38',
            seasonId: 16036,
            startDate: '2020-07-26T00:00:00Z',
            endDate: '2020-07-26T00:00:00Z',
          },
          venue: {
            id: 449,
            name: 'St. James Park',
          },
          date: '2020-07-26T15:00:00Z',
          stats: {
            homeScore: 1,
            awayScore: 3,
          },
        },
        stat: 'attacks_dangerous',
        value: 69,
      },
    ];

    getTeamStats.mockImplementationOnce(() => Promise.resolve(fetched));

    const stats = await teamStatPresenter({});

    const stat = stats[0];

    await expect(stat.fixtureId).toBe(11867603);
    await expect(stat.stat).toBe('attacks_dangerous');
    await expect(stat.value).toBe(69);
    await expect(stat.homeTeam).toBe('Newcastle United');
    await expect(stat.awayTeam).toBe('Liverpool');
    await expect(stat.date).toBe('2020-07-26T15:00:00Z');
    await expect(stat.homeScore).toBe(1);
    await expect(stat.awayScore).toBe(3);
    await expect(stat.venue).toBe('St. James Park');
  });
});
