import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import BrandWrapper from './BrandWrapper';
import icon from '../../../assets/images/statistico-toolbar-small.png';

const LogoIcon = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 70px;
  margin: 0 10px 0 10px;
`;

const Brand = (props) => {
  const { clicked } = props;

  const logoClicked = () => {
    clicked(false);
  };

  return (
    <BrandWrapper to="/" onClick={() => logoClicked()}>
      <LogoIcon src={icon} />
    </BrandWrapper>
  );
};

Brand.propTypes = {
  clicked: func.isRequired,
};

export default Brand;
