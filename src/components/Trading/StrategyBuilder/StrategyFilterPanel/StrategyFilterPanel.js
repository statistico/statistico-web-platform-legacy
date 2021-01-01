import React from 'react';
import styled from 'styled-components';

import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';
import MarketFilter from './MarketFilter/MarketFilter';

const MarketPanel = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #262d35;
  border-radius: 10px 20px 10px 20px;
  width: 50%;
  height: 200px;
  margin-right: 15px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
`;

const StrategyFilterPanel = () => {
  return (
    <StrategyFilterPanelWrapper>
      <MarketPanel />
      <MarketPanel />
    </StrategyFilterPanelWrapper>
  );
};

export default StrategyFilterPanel;
