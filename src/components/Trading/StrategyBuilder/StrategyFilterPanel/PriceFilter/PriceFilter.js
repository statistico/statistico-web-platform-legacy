import React, { useState } from 'react';

import PriceFilterWrapper from './PriceFilterWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import odds from '../../../../../config/odds';
import selectStyles from '../../../../../config/form-styles';

const PriceFilter = () => {
  const [minOdds, toggleMinOdds] = useState(null);
  const [maxOdds, toggleMaxOdds] = useState(null);

  return (
    <PriceFilterWrapper>
      <SingleFilter
        selection={minOdds}
        selections={odds}
        styles={selectStyles}
        title="Min Odds"
        toggleSelection={toggleMinOdds}
      />
      <SingleFilter
        selection={maxOdds}
        selections={odds}
        styles={selectStyles}
        title="Max Odds"
        toggleSelection={toggleMaxOdds}
      />
    </PriceFilterWrapper>
  );
};

export default PriceFilter;
