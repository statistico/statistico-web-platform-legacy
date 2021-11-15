import React from 'react';

import NavigationWrapper from './NavigationWrapper';
import Menu from './Menu';
import Brand from './Brand/Brand';

const Navigation = (): JSX.Element => {
  return (
    <NavigationWrapper>
      <Brand clicked={() => {}} />
      <Menu />
    </NavigationWrapper>
  );
};

export default Navigation;
