import React from "react";
import { shallow } from 'enzyme';

import SidebarMax from '../../components/Sidebar/SidebarMax/SidebarMax';
import SidebarMin from '../../components/Sidebar/SidebarMin/SidebarMin';
import TeamStats from "./TeamStats";
import { useTogglesMenu } from '../../hooks';

jest.mock('../../hooks')

describe('<TeamStats /> unit', () => {
    const setMock = bool => {
        useTogglesMenu.mockReturnValue({menuOpen: bool});
    };

    it('should render <SidebarMax /> component when menuOpen state is true', () => {
        setMock(true);
        const wrapper = shallow(<TeamStats />);
        expect(wrapper.find(SidebarMax)).toHaveLength(1);
    });

    it('should render <SidebarMix /> component when menuOpen state is false', () => {
        setMock(false);
        const wrapper = shallow(<TeamStats />);
        expect(wrapper.find(SidebarMin)).toHaveLength(1);
    })

    it('should not render <SidebarMax /> component when menuOpen state is false', () => {
        setMock(false);
        const wrapper = shallow(<TeamStats />);
        expect(wrapper.find(SidebarMax)).toHaveLength(0);
    });

    it('should not render <SidebarMix /> component when menuOpen state is true', () => {
        setMock(true);
        const wrapper = shallow(<TeamStats />);
        expect(wrapper.find(SidebarMin)).toHaveLength(0);
    })
});
