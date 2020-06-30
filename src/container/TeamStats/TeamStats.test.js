import React from "react";
import { mount } from 'enzyme';

import SidebarMax from '../../components/Sidebar/SidebarMax/SidebarMax';
import SidebarMin from '../../components/Sidebar/SidebarMin/SidebarMin';
import TeamStats from "./TeamStats";

describe('<TeamStats /> integration', () => {
    let wrapper;

    beforeEach(() => (wrapper = mount(<TeamStats />)));

    it('should render <SidebarMin /> component when arrow is clicked', () => {
        expect(wrapper.find(SidebarMin)).toHaveLength(0);
        expect(wrapper.find(SidebarMax)).toHaveLength(1);

        const icon = wrapper.find('#sidebar-arrow').first();
        icon.simulate('click')

        expect(wrapper.find(SidebarMin)).toHaveLength(1);
        expect(wrapper.find(SidebarMax)).toHaveLength(0);
    });

    it('should render <SidebarMix /> component when arrow in <SidebarMin /> is clicked', () => {
        let icon = wrapper.find('#sidebar-arrow').first();
        icon.simulate('click')

        expect(wrapper.find(SidebarMin)).toHaveLength(1);
        expect(wrapper.find(SidebarMax)).toHaveLength(0);

        icon = wrapper.find('#sidebar-arrow').first();
        icon.simulate('click')

        expect(wrapper.find(SidebarMin)).toHaveLength(0);
        expect(wrapper.find(SidebarMax)).toHaveLength(1);
    })
});
