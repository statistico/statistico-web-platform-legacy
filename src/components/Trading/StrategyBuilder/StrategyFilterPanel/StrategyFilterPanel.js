import React, { useState } from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import CompetitionSelect from './CompetitionSelect/CompetitionSelect';
import MarketSelect from './MarketSelect/MarketSelect';
import PriceSelect from './PriceSelect/PriceSelect';
import FilterList from './FilterPanel/FilterList/FilterList';
import FilterPanel from './FilterPanel/FilterPanel';
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
  const [resultFilters, setResultFilters] = useState([]);

  return (
    <StrategyFilterPanelWrapper active={active}>
      <StrategyBuilderRow>
        <Panel width="20%">
          <CompetitionSelect />
        </Panel>
        <Panel width="25%">
          <MarketSelect />
          <PriceSelect />
          <FilterPanel
            filters={resultFilters}
            updateFilters={setResultFilters}
          />
        </Panel>
        <Panel width="45%">
          <FilterList
            filters={resultFilters}
            updateFilters={setResultFilters}
          />
        </Panel>
      </StrategyBuilderRow>
    </StrategyFilterPanelWrapper>
  );
};

StrategyFilterPanel.propTypes = {
  active: bool.isRequired,
};

export default StrategyFilterPanel;
