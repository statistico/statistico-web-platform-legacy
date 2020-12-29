import React from 'react';
import styled from 'styled-components';

import MarketFilters from './MarketFilters/MarketFilters';
import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 20px;
`;

const StrategyFilterPanel = () => {
  return (
    <StrategyFilterPanelWrapper>
      <Title>Filters</Title>
      <MarketFilters />
      <div>Result Filters here</div>
      <div>Stat Filters here</div>
    </StrategyFilterPanelWrapper>
  );
};

export default StrategyFilterPanel;
