import React from 'react';
import styled from 'styled-components';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyFilterPanel from './StrategyFilterPanel/StrategyFilterPanel';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import TradeStatPanel from './TradeStatPanel/TradeStatPanel';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const StrategyBuilder = () => {
  return (
    <StrategyBuilderWrapper>
      <StrategyBuilderHeader />
      <StrategyFilterPanel />
      <TradeStatPanel />
    </StrategyBuilderWrapper>
  );
};

export default StrategyBuilder;
