import React from 'react';
import { shallow } from 'enzyme';

import ContentWrapper from './ContentWrapper';

describe('<ContentWrapper />', () => {
  it('displays props children is active prop is true', () => {
    const wrapper = shallow(
      <ContentWrapper active>Hello there</ContentWrapper>
    );

    expect(wrapper.text()).toEqual('Hello there');
  });

  it('displays props null is active prop is false', () => {
    const wrapper = shallow(
      <ContentWrapper active={false}>Hello there</ContentWrapper>
    );

    expect(wrapper.type()).toBeNull();
  });
});
