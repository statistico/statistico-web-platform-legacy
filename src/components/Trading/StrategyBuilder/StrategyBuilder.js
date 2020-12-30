import React from 'react';
import styled from 'styled-components';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyFilterPanel from './StrategyFilterPanel/StrategyFilterPanel';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const StrategyBuilder = () => {
  const market = 'Over/Under 2.5 Goals';
  const selection = 'Over 2.5 Goals';

  return (
    <StrategyBuilderWrapper>
      <StrategyBuilderHeader market={market} selection={selection} />
      <Content>
        <div>Main display of breakdowns go here</div>
        <StrategyFilterPanel />
      </Content>
    </StrategyBuilderWrapper>
  );
};

export default StrategyBuilder;
