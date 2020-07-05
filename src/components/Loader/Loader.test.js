import React from 'react';
import { shallow, mount } from 'enzyme';

import Loader from './Loader';

describe('<Loader />', () => {
  it('renders loading text if props loading is true', () => {
    const Dummy = () => {};
    const props = { loading: true };
    const wrapper = shallow(<Loader {...props} children={<Dummy />} />);
    expect(wrapper.text()).toEqual('Loading');
  });

  it('render props children if props loading is false', () => {
    const props = { loading: false };

    const Dummy = () => <div>Hello</div>;

    const wrapper = mount(
      <Loader {...props}>
        <Dummy />
      </Loader>,
    );

    expect(wrapper.text()).toEqual('Hello');
    expect(wrapper.find(Dummy)).toHaveLength(1);
  });
});
