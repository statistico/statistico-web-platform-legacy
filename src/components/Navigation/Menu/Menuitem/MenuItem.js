import React from 'react';
import styled from 'styled-components';
import { array, bool, func, shape, string } from 'prop-types';
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
  }
`;

const MenuItem = (props) => {
  const { clicked, open, icon, link, title } = props;
  return (
    <MenuItemWrapper open={open} to={link} onClick={() => clicked()}>
      <Icon>
        <FontAwesomeIcon icon={icon} size="1x" />
      </Icon>
      <Title open={open}>{title}</Title>
    </MenuItemWrapper>
  );
};

MenuItem.propTypes = {
  clicked: func.isRequired,
  open: bool.isRequired,
  icon: shape({
    icon: array,
  }).isRequired,
  link: string.isRequired,
  title: string.isRequired,
};

export default MenuItem;
