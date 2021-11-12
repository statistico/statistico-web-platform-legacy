import React from 'react';

import NavigationWrapper from './NavigationWrapper';
import Menu from './Menu';
import Brand from './TopBar/Brand/Brand';

const Navigation = (): JSX.Element => {
  return (
    <NavigationWrapper>
      <Brand clicked={() => {}} />
      <Menu selectItem={() => {}} selected="Yes" />
    </NavigationWrapper>
  );
};

export default Navigation;
