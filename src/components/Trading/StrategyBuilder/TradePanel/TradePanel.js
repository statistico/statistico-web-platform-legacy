import React, { useContext } from 'react';

import CompetitionList from './CompetitionList/CompetitionList';
import TradeGraph from './TradeGraph/TradeGraph';
import TradeLoader from './TradeLoader/TradeLoader';
import TradePanelWrapper from './TradePanelWrapper';
import TradeStatPanel from './TradeStatPanel/TradeStatPanel';
import WinLossChart from './WinLossChart/WinLossChart';
import { StrategyBuilderContext } from '../../../../context/StrategyBuilderContext';

const TradePanel = () => {
  const { loading } = useContext(StrategyBuilderContext);

  if (loading) {
    return (
      <TradePanelWrapper>
        <TradeLoader />
      </TradePanelWrapper>
    );
  }

  return (
    <TradePanelWrapper>
      <WinLossChart />
      <TradeGraph />
      <TradeStatPanel />
      <CompetitionList />
    </TradePanelWrapper>
  );
};

export default TradePanel;
