import React from 'react';
import { mount } from 'enzyme';

import TeamStats from './TeamStats';
import TeamStatsMatch from './TeamStatsMatch/TeamStatsMatch';
import useFetchesTeam from '../../hooks/useFetchesTeam';

jest.mock('../../hooks/useFetchesTeam');

describe('<TeamStats />', () => {
  let wrapper;

  beforeEach(() => {
    useFetchesTeam.mockReturnValue({
      team: {},
      loading: false,
    });
    wrapper = mount(<TeamStats />);
  });

  it('it renders TeamStatsMatch component by default once loading is complete', () => {
    expect(wrapper.find(TeamStatsMatch)).toHaveLength(1);
  });

  it('it does not render TeamStatsMatch component when another component is selected via TeamStatsSideBar', () => {
    const component = wrapper.find('#Sidebar1').first();

    component.simulate('click');

    expect(wrapper.find(TeamStatsMatch)).toHaveLength(0);
  });
});
