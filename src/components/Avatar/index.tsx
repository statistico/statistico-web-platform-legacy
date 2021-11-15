import React from 'react';
import styled from 'styled-components';

import AvatarWrapper from './Avatar.styles';
import icon from '../../assets/images/avatar.png';

const LogoIcon = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 70px;
  margin: 0 10px 0 10px;
  border-radius: 50px;
  border: 2px solid #22ccde;
`;

const Avatar = () => {
  return (
    <AvatarWrapper>
      <LogoIcon src={icon} />
    </AvatarWrapper>
  );
};

export default Avatar;
