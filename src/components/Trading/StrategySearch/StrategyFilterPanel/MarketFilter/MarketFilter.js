import React, { useCallback, useState } from 'react';

import MarketFilterWrapper from './MarketFilterWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import markets from '../../../../../config/markets';

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

const MarketFilter = () => {
  const [market, toggleMarket] = useState(null);
  const [runner, toggleRunner] = useState(null);

  const updateMarket = useCallback((m) => {
    toggleRunner(null);
    toggleMarket(m);
  }, []);

  return (
    <MarketFilterWrapper>
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
    </MarketFilterWrapper>
  );
};

export default MarketFilter;
