import React from 'react';
import styled from 'styled-components';

import BrandWrapper from './BrandWrapper';
import icon from '../../../../assets/images/statistico-toolbar-small.png';

const LogoIcon = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 50px;
  margin: 0 10px 0 10px;
`;

const brand = () => {
  return (
    <BrandWrapper>
      <LogoIcon src={icon} />
    </BrandWrapper>
  );
};

export default brand;
