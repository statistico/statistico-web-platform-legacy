import React from 'react';
import styled from 'styled-components';

import StrategyFilterPanel from './StrategyFilterPanel/StrategyFilterPanel';
import StrategySearchWrapper from './StrategySearchWrapper';

const Title = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 500;
  padding: 20px 0 30px 20px;
  border-bottom: 2px solid black;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const StrategySearch = () => {
  return (
    <StrategySearchWrapper>
      <Title>Trade Strategy Search</Title>
      <Content>
        <div>Main display of breakdowns go here</div>
        <StrategyFilterPanel />
      </Content>
    </StrategySearchWrapper>
  );
};

export default StrategySearch;
