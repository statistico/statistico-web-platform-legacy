import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import CompetitionSelect from './CompetitionSelect/CompetitionSelect';
import MarketSelect from './MarketSelect/MarketSelect';
import PriceSelect from './PriceSelect/PriceSelect';
import ResultFilterList from './ResultFilterList/ResultFilterList';
import StatFilterList from './StatFilterList/StatFilterList';
import StrategyBuilderRow from '../StrategyBuilderRow';
import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  margin: 0 20px 0 20px;
`;

const StrategyFilterPanel = (props) => {
  const { active } = props;

  return (
    <StrategyFilterPanelWrapper active={active}>
      <StrategyBuilderRow>
        <Panel width="25%">
          <MarketSelect />
          <PriceSelect />
        </Panel>
        <Panel width="20%">
          <CompetitionSelect />
        </Panel>
        <Panel width="45%">
          <ResultFilterList />
          <StatFilterList />
        </Panel>
      </StrategyBuilderRow>
    </StrategyFilterPanelWrapper>
  );
};

StrategyFilterPanel.propTypes = {
  active: bool.isRequired,
};

export default StrategyFilterPanel;
