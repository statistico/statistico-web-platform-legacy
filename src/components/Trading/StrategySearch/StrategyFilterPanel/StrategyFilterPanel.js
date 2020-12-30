import React, { useCallback, useState } from 'react';

import PriceFilter from './PriceFilter/PriceFilter';
import SingleFilter from '../../../SingleFilter/SingleFilter';
import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';
import markets from '../../../../config/markets';

const styles = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    fontSize: '18px',
  }),

  valueContainer: (provided) => ({
    ...provided,
    justifyContent: 'left',
    color: '#1d1d1d',
  }),

  control: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
};

const StrategyFilterPanel = () => {
  const [market, toggleMarket] = useState(null);
  const [runner, toggleRunner] = useState(null);

  const updateMarket = useCallback((m) => {
    toggleRunner(null);
    toggleMarket(m);
  }, []);

  return (
    <StrategyFilterPanelWrapper>
      <SingleFilter
        selection={market}
        selections={markets}
        styles={styles}
        title="Market"
        toggleSelection={updateMarket}
      />
      <SingleFilter
        selection={runner}
        selections={market != null ? market.runners : []}
        styles={styles}
        title="Selection"
        toggleSelection={toggleRunner}
      />
      <PriceFilter />
      <div>League Filters here</div>
      <div>Result Filters here</div>
      <div>Stat Filters here</div>
    </StrategyFilterPanelWrapper>
  );
};

export default StrategyFilterPanel;
