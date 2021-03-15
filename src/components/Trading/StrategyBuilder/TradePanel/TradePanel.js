import React, { useContext } from 'react';
import { bool } from 'prop-types';

import CompetitionList from './CompetitionList/CompetitionList';
import TradeGraph from './TradeGraph/TradeGraph';
import TradeLoader from './TradeLoader/TradeLoader';
import TradePanelWrapper from './TradePanelWrapper';
import TradeStatPanel from './TradeStatPanel/TradeStatPanel';
import WinLossChart from './WinLossChart/WinLossChart';
import { StrategyBuilderContext } from '../../../../context/StrategyBuilderContext';

const TradePanel = (props) => {
  const { isActive } = props;
  const { built, loading } = useContext(StrategyBuilderContext);

  if (loading) {
    return (
      <TradePanelWrapper isActive={isActive}>
        <TradeLoader />
      </TradePanelWrapper>
    );
  }

  if (!built) {
    return (
      <TradePanelWrapper isActive={isActive}>
        <p>Please build a strategy to view the breakdown panel</p>
      </TradePanelWrapper>
    );
  }

  return (
    <TradePanelWrapper isActive={isActive}>
      <WinLossChart />
      <TradeGraph />
      <TradeStatPanel />
      <CompetitionList />
    </TradePanelWrapper>
  );
};

TradePanel.propTypes = {
  isActive: bool.isRequired,
};

export default TradePanel;
