import React from 'react';

import MarketRunnerSelectWrapper from './MarketRunnerSelectWrapper';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';

import markets from '../../../../../../config/markets';
import selectStyles from '../../../../../../config/form-styles';

const MarketRunnerSelect = () => {
  return (
    <MarketRunnerSelectWrapper>
      <SingleFilter
        selection={null}
        selections={markets}
        styles={selectStyles}
        title="Market"
        toggleSelection={() => {}}
      />
      <SingleFilter
        selection={null}
        selections={[]}
        styles={selectStyles}
        title="Selection"
        toggleSelection={() => {}}
      />
    </MarketRunnerSelectWrapper>
  );
};

export default MarketRunnerSelect;
