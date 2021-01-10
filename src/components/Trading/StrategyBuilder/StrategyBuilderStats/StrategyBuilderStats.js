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
  const { loading, tr } = useContext(StrategyBuilderContext);

  return (
    <StrategyBuilderStatsWrapper>
      <Loader loading={loading}>
        <StrategyBuilderRow>
          <WinLossChart loading={loading} trades={tr} />
          <TradeGraph loading={loading} trades={tr} />
        </StrategyBuilderRow>
        <TradeStatPanel loading={loading} trades={tr} />
        <StrategyBuilderRow>
          <CompetitionList loading={loading} trades={tr} />
        </StrategyBuilderRow>
      </Loader>
    </StrategyBuilderStatsWrapper>
  );
};

export default StrategyBuilderStats;
