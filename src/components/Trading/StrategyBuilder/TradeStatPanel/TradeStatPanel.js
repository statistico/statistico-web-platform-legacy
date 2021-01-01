import React from 'react';

import TradeStatPanelWrapper from './TradeStatPanelWrapper';
import TradeStat from './TradeStat/TradeStat';

const TradeStatPanel = () => {
  return (
    <TradeStatPanelWrapper>
      <TradeStat />
      <TradeStat />
      <TradeStat />
      <TradeStat />
      <TradeStat />
      <TradeStat />
    </TradeStatPanelWrapper>
  );
};

export default TradeStatPanel;
