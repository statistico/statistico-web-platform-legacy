import React from 'react';

import CompetitionListHeaderWrapper from './CompetitionListHeaderWrapper';

const CompetitionListHeader = () => {
  return (
    <CompetitionListHeaderWrapper>
      <p>Competition</p>
      <p>Total Trades</p>
      <p>Average Odds</p>
      <p>Maximum Drawdown</p>
      <p>Yield</p>
      <p>Profit / Loss</p>
    </CompetitionListHeaderWrapper>
  );
};

export default CompetitionListHeader;
