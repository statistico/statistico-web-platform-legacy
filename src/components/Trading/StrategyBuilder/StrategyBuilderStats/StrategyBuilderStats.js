import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import StrategyBuilderStatsWrapper from './StrategyBuilderStatsWrapper';
import StrategyBuilderRow from '../StrategyBuilderRow';
import WinLossChart from '../WinLossChart/WinLossChart';
import TradeGraph from '../TradeGraph/TradeGraph';
import TradeStatPanel from '../TradeStatPanel/TradeStatPanel';
import CompetitionList from '../CompetitionList/CompetitionList';

const StrategyBuilderStats = (props) => {
  const { trades } = props;

  return (
    <StrategyBuilderStatsWrapper>
      <StrategyBuilderRow>
        <WinLossChart trades={trades} />
        <TradeGraph trades={trades} />
      </StrategyBuilderRow>
      <TradeStatPanel trades={trades} />
      <StrategyBuilderRow>
        <CompetitionList trades={trades} />
      </StrategyBuilderRow>
    </StrategyBuilderStatsWrapper>
  );
};

StrategyBuilderStats.propTypes = {
  trades: arrayOf(
    shape({
      competitionId: number.isRequired,
      result: string.isRequired,
      runnerPrice: number.isRequired,
    })
  ).isRequired,
};

export default StrategyBuilderStats;
