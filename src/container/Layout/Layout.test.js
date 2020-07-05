import React from 'react';
import { mount } from 'enzyme';

import Layout from './Layout';
import SidebarMenu from '../../components/Navigation/SidebarMenu/SidebarMenu';
import Toggle from '../../components/Toggle/Toggle';

describe('<Layout />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Layout />);
  });

  it('should not render <SidebarMenu /> by default', () => {
    expect(wrapper.find(SidebarMenu)).toHaveLength(0);
  });

  it('should render <SidebarMenu /> when <Toggle /> is clicked', () => {
    const toggle = wrapper.find(Toggle);
    toggle.simulate('click');
    expect(wrapper.find(SidebarMenu)).toHaveLength(1);
  });
});
