import React, { useContext } from 'react';

import CompetitionList from '../CompetitionList/CompetitionList';
import Loader from '../../../Loader/Loader';
import StrategyBuilderStatsWrapper from './StrategyBuilderStatsWrapper';
import StrategyBuilderRow from '../StrategyBuilderRow';
import TradeGraph from '../TradeGraph/TradeGraph';
import TradeStatPanel from '../TradeStatPanel/TradeStatPanel';
import WinLossChart from '../WinLossChart/WinLossChart';
import { StrategyBuilderContext } from '../../../../context/StrategyBuilderContext';

const StrategyBuilderStats = () => {
  const { loading } = useContext(StrategyBuilderContext);

  return (
    <StrategyBuilderStatsWrapper>
      <Loader loading={loading}>
        <StrategyBuilderRow>
          <WinLossChart />
          <TradeGraph />
        </StrategyBuilderRow>
        <TradeStatPanel />
        <StrategyBuilderRow>
          <CompetitionList />
        </StrategyBuilderRow>
      </Loader>
    </StrategyBuilderStatsWrapper>
  );
};

export default StrategyBuilderStats;
