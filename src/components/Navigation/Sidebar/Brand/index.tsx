import React from 'react';

import { BrandWrapper, LogoIcon, LogoText } from './BrandWrapper';
import icon from '../../../../assets/images/statistico-toolbar-small.png';
import text from '../../../../assets/images/statistico-logotype-blue_s.png';

type BrandProps = {
  clicked: () => void;
  menuOpen: boolean;
};

const brand = (props: BrandProps): JSX.Element => {
  const { clicked, menuOpen } = props;

  return (
    <BrandWrapper open={menuOpen} to="/" onClick={() => clicked()}>
      <LogoIcon src={icon} open={menuOpen} />
      <LogoText src={text} open={menuOpen} />
    </BrandWrapper>
  );
};

export default brand;
