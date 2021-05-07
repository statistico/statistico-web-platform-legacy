import React from 'react';
import { bool } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import MenuArrowWrapper from './MenuArrowWrapper';

const MenuArrow = (props) => {
  const { collapsed } = props;

  return (
    <MenuArrowWrapper>
      {collapsed ? (
        <FontAwesomeIcon icon={faAngleUp} size="1x" />
      ) : (
        <FontAwesomeIcon icon={faAngleDown} size="1x" />
      )}
    </MenuArrowWrapper>
  );
};

MenuArrow.propTypes = {
  collapsed: bool.isRequired,
};

export default MenuArrow;
