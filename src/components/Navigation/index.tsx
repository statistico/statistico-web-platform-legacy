import React from 'react';

import Avatar from '../Avatar';
import Menu from './Menu';
import NavigationWrapper from './NavigationWrapper';
import Brand from './Brand/Brand';

const Navigation = (): JSX.Element => {
  return (
    <NavigationWrapper>
      <Brand />
      <Menu />
      <Avatar />
    </NavigationWrapper>
  );
};

export default Navigation;
