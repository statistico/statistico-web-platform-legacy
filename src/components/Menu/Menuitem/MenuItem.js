import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MenuItemWrapper from './MenuItemWrapper';

const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 10px 15px 30px;
  width: 30%;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 15px 30px 15px 10px;
  width: 70%;
`;

const MenuItem = (props) => {
  const { icon, title } = props;
  return (
    <MenuItemWrapper>
      <Icon>
        <FontAwesomeIcon icon={icon} size="1x" />
      </Icon>
      <Title>{title}</Title>
    </MenuItemWrapper>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
