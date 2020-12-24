import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MenuItemWrapper from './MenuItemWrapper';

const MenuItem = (props) => {
  const { icon, title } = props;
  return (
    <MenuItemWrapper>
      <FontAwesomeIcon icon={icon} size="1x" />
      <span>{title}</span>
    </MenuItemWrapper>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
