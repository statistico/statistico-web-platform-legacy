import React from 'react';
import styled from 'styled-components';

import icon from '../../../assets/images/avatar.jpeg';

const Avatar = styled.img`
  height: 48px;
  margin: 0 15px 0 0;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  border: 2px solid #22ccde;

  @media (max-width: 768px) {
    display: none;
  }
`;

const avatar = () => <Avatar src={icon} alt="avatar" />;

export default avatar;
