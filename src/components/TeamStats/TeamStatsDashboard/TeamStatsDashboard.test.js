import React from 'react';
import { mount } from 'enzyme';

import Loader from '../../Loader/Loader';
import TeamStatsDashBoard from './TeamStatsDashboard';
import TeamStatsMatch from '../TeamStatsMatch/TeamStatsMatch';
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
      selectedSeasons: {
        current: true,
        name: '2019/2020',
        seasonIds: [1, 2, 3],
      },
      selectedSeasonsToggleHandler: () => {},
    });

    wrapper = mount(<TeamStatsDashBoard team={team} />);

    expect(wrapper.find(TeamStatsMatch)).toHaveLength(1);
  });

  it('it does not render TeamStatsMatch component when another component is selected via TeamStatsSideBar', async () => {
    useFetchesTeamSeasons.mockReturnValue({
      seasons: [
        {
          current: true,
          name: '2019/2020',
          seasonIds: [1, 2, 3],
        },
      ],
      selectedSeasons: {
        current: true,
        name: '2019/2020',
        seasonIds: [1, 2, 3],
      },
      selectedSeasonsToggleHandler: () => {},
    });

    wrapper = mount(<TeamStatsDashBoard team={team} />);

    const component = wrapper.find('#Sidebar1').first();

    component.simulate('click');

    expect(wrapper.find(TeamStatsMatch)).toHaveLength(0);
  });

  it('renders <Loading /> component is seasons returned from hook is an empty array', async () => {
    useFetchesTeamSeasons.mockReturnValue({
      seasons: [],
      selectedSeasons: {
        current: true,
        name: '2019/2020',
        seasonIds: [1, 2, 3],
      },
      selectedSeasonsToggleHandler: () => {},
    });

    wrapper = mount(<TeamStatsDashBoard team={team} />);

    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
