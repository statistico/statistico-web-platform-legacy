import React, { useContext } from 'react';

import {
  StrategyBuilderContext,
  StrategyBuilderActionContext,
} from '../../../../../context/StrategyBuilderContext';
import LineSelectWrapper from './LineSelectWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import { lines } from '../../../../../config/filters';
import selectStyles from '../../../../../config/form-styles';

const LineSelect = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const updateLine = (l) => {
    setFilters({ ...filters, line: l });
  };

  return (
    <LineSelectWrapper>
      <SingleFilter
        selection={filters.line}
        selections={lines}
        styles={selectStyles}
        title="Line"
        toggleSelection={updateLine}
      />
    </LineSelectWrapper>
  );
};

export default LineSelect;
