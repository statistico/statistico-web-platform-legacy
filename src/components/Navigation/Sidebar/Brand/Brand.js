import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';

import BrandWrapper from './BrandWrapper';
import icon from '../../../../assets/images/statistico-toolbar-small.png';
import text from '../../../../assets/images/statistico-logotype-blue_s.png';

const LogoIcon = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 50px;
  margin: 0 10px 0 10px;
`;

const LogoText = styled.img`
  height: 18px;
  max-width: 200px;
  margin: 0 5px 0 15px;
  display: ${(props) => (props.open ? 'flex' : 'none')};

  @media (max-width: 768px) {
    display: none;
  }
`;

const brand = (props) => {
  const { menuOpen } = props;

  return (
    <BrandWrapper>
      <LogoIcon src={icon} />
      <LogoText src={text} open={menuOpen} />
    </BrandWrapper>
  );
};

brand.propTypes = {
  menuOpen: bool.isRequired,
};

export default brand;
