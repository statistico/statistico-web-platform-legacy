import React from 'react';

import { BrandWrapper, LogoIcon, LogoText } from './BrandWrapper';
import icon from '../../../../assets/images/statistico-toolbar-small.png';
import text from '../../../../assets/images/statistico-logotype-blue_s.png';

const brand = ({ menuOpen }: { menuOpen: boolean }): JSX.Element => {
  return (
    <BrandWrapper to="/">
      <LogoIcon src={icon} open={menuOpen} />
      <LogoText src={text} open={menuOpen} />
    </BrandWrapper>
  );
};

export default brand;
