import React from 'react';

import CompetitionRowWrapper from '../CompetitionRow/CompetitionRowWrapper';

const CompetitionListHeader = () => {
  return (
    <CompetitionRowWrapper colour="#22ccde">
      <p>Competition</p>
      <p>Total Trades</p>
      <p>Average Odds</p>
      <p>Maximum Drawdown (units)</p>
      <p>Yield (%)</p>
      <p>Profit / Loss (units)</p>
    </CompetitionRowWrapper>
  );
};

export default CompetitionListHeader;
