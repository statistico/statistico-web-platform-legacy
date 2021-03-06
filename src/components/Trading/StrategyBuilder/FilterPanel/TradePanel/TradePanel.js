import React from 'react';

import LineSelect from './LineSelect/LineSelect';
import MarketRunnerSelect from './MarketRunnerSelect/MarketRunnerSelect';
import OddsSelect from './OddsSelect/OddsSelect';
import PanelTitle from '../PanelTitle/PanelTitle';
import { FilterWrapper, TradePanelWrapper } from './TradePanelWrapper';
import TypeSelect from './TypeSelect/TypeSelect';

const TradePanel = () => {
  return (
    <TradePanelWrapper>
      <PanelTitle title="Trade" />
      <FilterWrapper>
        <MarketRunnerSelect />
        <LineSelect />
        <TypeSelect />
        <OddsSelect />
      </FilterWrapper>
    </TradePanelWrapper>
  );
};

export default TradePanel;
