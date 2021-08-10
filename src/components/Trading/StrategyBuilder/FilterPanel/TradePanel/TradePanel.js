import React from 'react';

import LineSelect from './LineSelect/LineSelect';
import MarketRunnerSelect from './MarketRunnerSelect/MarketRunnerSelect';
import OddsSelect from './OddsSelect/OddsSelect';
import PanelTitle from '../PanelTitle/PanelTitle';
import { FilterWrapper, TradePanelWrapper } from './TradePanelWrapper';
import SideSelect from './SideSelect/SideSelect';

const TradePanel = () => (
  <TradePanelWrapper>
    <PanelTitle title="Trade" />
    <FilterWrapper>
      <MarketRunnerSelect />
      <LineSelect />
      <SideSelect />
      <OddsSelect />
    </FilterWrapper>
  </TradePanelWrapper>
);

export default TradePanel;
