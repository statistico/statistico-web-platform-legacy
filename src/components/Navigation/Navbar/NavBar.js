import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import Brand from '../../Sidebar/Brand/Brand';
import NavBarWrapper from './NavBarWrapper';
import NavLinks from '../NavLinks/NavLinks';
import Toggle from '../Toggle/Toggle';

const NavBar = (props) => {
  const { open, clicked } = props;

  return (
    <NavBarWrapper>
      <Brand />
      <NavLinks />
      <Avatar />
      <Toggle open={open} clicked={clicked} />
    </NavBarWrapper>
  );
};

NavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default NavBar;
