import React, { useState } from 'react';

import PriceSelectWrapper from './PriceSelectWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import odds from '../../../../../config/odds';
import selectStyles from '../../../../../config/form-styles';

const PriceSelect = () => {
  const [minOdds, toggleMinOdds] = useState(null);
  const [maxOdds, toggleMaxOdds] = useState(null);

  return (
    <PriceSelectWrapper>
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
    </PriceSelectWrapper>
  );
};

export default PriceSelect;
