import React, { useContext } from 'react';

import SideSelectWrapper from './SideSelectWrapper';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../../context/StrategyBuilderContext';

import { side } from '../../../../../../config/filters';
import selectStyles from '../../../../../../config/form-styles';

const SideSelect = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const updateSide = (s) => {
    setFilters({ ...filters, side: s });
  };

  return (
    <SideSelectWrapper>
      <SingleFilter
        selection={filters.side}
        selections={side}
        styles={selectStyles}
        title="Side"
        toggleSelection={updateSide}
      />
    </SideSelectWrapper>
  );
};

export default SideSelect;
