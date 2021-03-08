import React, { useContext } from 'react';

import TradeLoader from './TradeLoader/TradeLoader';
import TradePanelWrapper from './TradePanelWrapper';
import { StrategyBuilderContext } from '../../../../context/StrategyBuilderContext';

const TradePanel = () => {
  const { tr, loading } = useContext(StrategyBuilderContext);

  if (loading) {
    return (
      <TradePanelWrapper>
        <TradeLoader />
      </TradePanelWrapper>
    );
  }

  return (
    <TradePanelWrapper>
      <div>This is the trade panel</div>
    </TradePanelWrapper>
  );
};

export default TradePanel;
