import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import StrategyBuilderHeaderWrapper from './StrategyBuilderHeaderWrapper';

const Title = styled.div`
  color: #22ccde;
  font-size: 40px;
  font-weight: 500;
  padding: 20px 0 26px 0px;
`;

const MarketSelectionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  h3,
  p {
    text-align: left;
    padding-bottom: 5px;
  }
`;

const Market = styled.div`
  padding-right: 20px;
`;

const Selection = styled.div`
  padding-left: 20px;
`;

const StrategyBuilderHeader = (props) => {
  const { market, selection } = props;

  return (
    <StrategyBuilderHeaderWrapper>
      <MarketSelectionWrapper>
        <Market>
          <h3>Market</h3>
          <p>{market}</p>
        </Market>
        <Selection>
          <h3>Selection</h3>
          <p>{selection}</p>
        </Selection>
      </MarketSelectionWrapper>
      <Title>Strategy Builder</Title>
    </StrategyBuilderHeaderWrapper>
  );
};

StrategyBuilderHeader.propTypes = {
  market: string.isRequired,
  selection: string.isRequired,
};

export default StrategyBuilderHeader;
