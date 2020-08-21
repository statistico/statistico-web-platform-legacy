import React from 'react';
import { mount } from 'enzyme';

import SidebarMax from '../../Sidebar/SidebarMax/SidebarMax';
import SidebarMin from '../../Sidebar/SidebarMin/SidebarMin';
import TeamSideBar from './TeamSideBar';

describe('<TeamStatsSideBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TeamSideBar
        team={{}}
        selected={0}
        toggleDisplay={() => {}}
        seasons={[]}
        selectedSeason={{}}
        toggleSeason={() => {}}
      />
    );
  });

  it('should render <SidebarMin /> component when arrow is clicked', () => {
    expect(wrapper.find(SidebarMin)).toHaveLength(0);
    expect(wrapper.find(SidebarMax)).toHaveLength(1);

    const icon = wrapper.find('#sidebar-arrow').first();
    icon.simulate('click');

    expect(wrapper.find(SidebarMin)).toHaveLength(1);
    expect(wrapper.find(SidebarMax)).toHaveLength(0);
  });

  it('should render <SidebarMix /> component when arrow in <SidebarMin /> is clicked', () => {
    let icon = wrapper.find('#sidebar-arrow').first();
    icon.simulate('click');

    expect(wrapper.find(SidebarMin)).toHaveLength(1);
    expect(wrapper.find(SidebarMax)).toHaveLength(0);

    icon = wrapper.find('#sidebar-arrow').first();
    icon.simulate('click');

    expect(wrapper.find(SidebarMin)).toHaveLength(0);
    expect(wrapper.find(SidebarMax)).toHaveLength(1);
  });
});
