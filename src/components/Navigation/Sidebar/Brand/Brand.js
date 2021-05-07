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
  margin: ${(props) => (props.open ? '0 10px 15px 10px' : '0 10px 50px 10px')};
`;

const LogoText = styled.img`
  height: 25px;
  max-width: 200px;
  margin: 0 5px 10px 5px;
  display: ${(props) => (props.open ? 'flex' : 'none')};

  @media (max-width: 768px) {
    display: none;
  }
`;

const brand = (props) => {
  const { menuOpen } = props;

  return (
    <BrandWrapper to="/">
      <LogoIcon src={icon} open={menuOpen} />
      <LogoText src={text} open={menuOpen} />
    </BrandWrapper>
  );
};

brand.propTypes = {
  menuOpen: bool.isRequired,
};

export default brand;
