import React from 'react';
import { array, bool, func, shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Aux from '../../../../hoc/Aux/Aux';
import { Icon, MenuItemWrapper, Title } from './MenuItemWrapper';

const MenuItem = (props) => {
  const { clicked, open, link, icon, title } = props;

  return (
    <Aux>
      <MenuItemWrapper open={open} onClick={clicked} to={link}>
        <Icon>
          <FontAwesomeIcon icon={icon} size="1x" />
        </Icon>
        <Title open={open}>{title}</Title>
      </MenuItemWrapper>
    </Aux>
  );
};

MenuItem.propTypes = {
  clicked: func.isRequired,
  link: string.isRequired,
  open: bool.isRequired,
  icon: shape({
    icon: array,
  }).isRequired,
  title: string.isRequired,
};

export default MenuItem;
