import React from 'react';
import styled from 'styled-components';

import StrategyBuilderRow from '../StrategyBuilderRow';

const Title = styled.div`
  color: #22ccde;
  font-size: 32px;
  font-weight: 500;
  padding: 20px 0 26px 15px;
`;

const StrategyBuilderHeader = () => {
  return (
    <StrategyBuilderRow>
      <Title>Strategy Builder</Title>
    </StrategyBuilderRow>
  );
};

export default StrategyBuilderHeader;
