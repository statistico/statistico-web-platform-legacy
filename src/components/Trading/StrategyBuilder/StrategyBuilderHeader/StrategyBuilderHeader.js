import React from 'react';
import styled from 'styled-components';

import StrategyBuilderHeaderWrapper from './StrategyBuilderHeaderWrapper';

const Title = styled.div`
  color: #22ccde;
  font-size: 40px;
  font-weight: 500;
  padding: 20px 0 26px 0px;
`;

const StrategyBuilderHeader = () => {
  return (
    <StrategyBuilderHeaderWrapper>
      <Title>Strategy Builder</Title>
    </StrategyBuilderHeaderWrapper>
  );
};

export default StrategyBuilderHeader;
