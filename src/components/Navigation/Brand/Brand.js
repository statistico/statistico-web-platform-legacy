import React from 'react';
import styled from 'styled-components';

import Aux from '../../../hoc/Aux/Aux';

import icon from '../../../assets/images/statistico-toolbar-small.png';
import text from '../../../assets/images/statistico-logotype-blue_s.png';

const LogoIcon = styled.img`
  max-width: 50px;
  margin: 0 10px 0 10px;
`;

const LogoText = styled.img`
  height: 18px;
  max-width: 100px;
  margin: 0 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const brand = () => {
  return (
    <Aux>
      <LogoIcon src={icon} />
      <LogoText src={text} />
    </Aux>
  );
};

export default brand;
