import React from 'react';
import { mount } from 'enzyme';

import Loader from '../../Loader/Loader';
import TeamDashboard from './TeamDashboard';
import TeamStatsMatch from '../TeamMatch/TeamMatch';
import useFetchesTeamSeasons from '../../../hooks/useFetchesTeamSeasons';

jest.mock('../../../hooks/useFetchesTeamSeasons');

describe('<TeamStatsDashBoard />', () => {
  let wrapper;

  const team = {
    id: 1,
    name: 'West Ham United',
    logo: 'http://logo.png',
  };

  it('it renders TeamStatsMatch component by default once loading is complete', async () => {
    useFetchesTeamSeasons.mockReturnValue({
      seasons: [
        {
          current: true,
          name: '2019/2020',
          seasonIds: [1, 2, 3],
        },
      ],
      selectedSeason: {
        current: true,
        name: '2019/2020',
        seasonIds: [1, 2, 3],
      },
      toggleSeason: () => {},
    });

    wrapper = mount(<TeamDashboard team={team} />);

    expect(wrapper.find(TeamStatsMatch)).toHaveLength(1);
  });

  it('renders <Loading /> component if seasons returned from hook is an empty array', async () => {
    useFetchesTeamSeasons.mockReturnValue({
      seasons: [],
      selectedSeason: {
        current: true,
        name: '2019/2020',
        seasonIds: [1, 2, 3],
      },
      toggleSeason: () => {},
    });

    wrapper = mount(<TeamDashboard team={team} />);

    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
