import React from 'react';
import { bool, func } from 'prop-types';

import Brand from './Brand/Brand';
import Toggle from './Toggle/Toggle';
import TopBarWrapper from './TopBarWrapper';

const TopBar = (props) => {
  const { open, clicked } = props;

  return (
    <TopBarWrapper>
      <Brand menuOpen={open} />
      <Toggle open={open} clicked={clicked} />
    </TopBarWrapper>
  );
};

TopBar.propTypes = {
  open: bool.isRequired,
  clicked: func.isRequired,
};

export default TopBar;
