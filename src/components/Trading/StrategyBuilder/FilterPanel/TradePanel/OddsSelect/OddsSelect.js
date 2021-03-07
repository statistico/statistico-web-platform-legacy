import React, { useContext } from 'react';

import OddsSelectWrapper from './OddsSelectWrapper';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../../context/StrategyBuilderContext';

import odds from '../../../../../../config/odds';
import selectStyles from '../../../../../../config/form-styles';

const OddsSelect = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const updateMaxOdds = (o) => {
    setFilters({ ...filters, maxOdds: o });
  };

  const updateMinOdds = (o) => {
    setFilters({ ...filters, minOdds: o });
  };

  return (
    <OddsSelectWrapper>
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
    </OddsSelectWrapper>
  );
};

export default OddsSelect;
