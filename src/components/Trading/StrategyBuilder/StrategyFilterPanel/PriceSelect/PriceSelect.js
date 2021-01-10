import React, { useContext } from 'react';

import PriceSelectWrapper from './PriceSelectWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import odds from '../../../../../config/odds';
import selectStyles from '../../../../../config/form-styles';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../context/StrategyBuilderContext';

const PriceSelect = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const updateMaxOdds = (o) => {
    setFilters({ ...filters, maxOdds: o });
  };

  const updateMinOdds = (o) => {
    setFilters({ ...filters, minOdds: o });
  };

  return (
    <PriceSelectWrapper>
      <SingleFilter
        selection={filters.minOdds}
        selections={odds}
        styles={selectStyles}
        title="Min Odds"
        toggleSelection={updateMinOdds}
      />
      <SingleFilter
        selection={filters.maxOdds}
        selections={odds}
        styles={selectStyles}
        title="Max Odds"
        toggleSelection={updateMaxOdds}
      />
    </PriceSelectWrapper>
  );
};

export default PriceSelect;
