import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MenuItemWrapper from './MenuItemWrapper';

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0 15px 0;
  width: 30%;

  @media (max-width: 768px) {
    width: 40%;
    justify-content: flex-end;
  }
`;

const Title = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-start;
  padding: 15px 30px 15px 20px;
  width: 70%;

  @media (max-width: 768px) {
    width: 60%;
    padding: 15px 30px 15px 20px;
  }
`;

const MenuItem = (props) => {
  const { open, icon, title } = props;
  return (
    <MenuItemWrapper open={open}>
      <Icon>
        <FontAwesomeIcon icon={icon} size="1x" />
      </Icon>
      <Title open={open}>{title}</Title>
    </MenuItemWrapper>
  );
};

MenuItem.propTypes = {
  open: PropTypes.bool.isRequired,
  icon: PropTypes.shape({
    icon: PropTypes.array,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
