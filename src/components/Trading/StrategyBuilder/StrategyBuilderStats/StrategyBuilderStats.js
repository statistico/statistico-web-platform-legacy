import React from 'react';
import { arrayOf, bool, number, shape, string } from 'prop-types';

import CompetitionList from '../CompetitionList/CompetitionList';
import Loader from '../../../Loader/Loader';
import StrategyBuilderStatsWrapper from './StrategyBuilderStatsWrapper';
import StrategyBuilderRow from '../StrategyBuilderRow';
import TradeGraph from '../TradeGraph/TradeGraph';
import TradeStatPanel from '../TradeStatPanel/TradeStatPanel';
import WinLossChart from '../WinLossChart/WinLossChart';

const StrategyBuilderStats = (props) => {
  const { loading, trades } = props;

  return (
    <StrategyBuilderStatsWrapper>
      <Loader loading={loading}>
        <StrategyBuilderRow>
          <WinLossChart loading={loading} trades={trades} />
          <TradeGraph loading={loading} trades={trades} />
        </StrategyBuilderRow>
        <TradeStatPanel loading={loading} trades={trades} />
        <StrategyBuilderRow>
          <CompetitionList loading={loading} trades={trades} />
        </StrategyBuilderRow>
      </Loader>
    </StrategyBuilderStatsWrapper>
  );
};

StrategyBuilderStats.propTypes = {
  loading: bool.isRequired,
  trades: arrayOf(
    shape({
      competitionId: number.isRequired,
      result: string.isRequired,
      runnerPrice: number.isRequired,
    })
  ).isRequired,
};

export default StrategyBuilderStats;
