import React, { useContext } from 'react';

import CompetitionSelectWrapper from './CompetitionSelectWrapper';
import MultiFilter from '../../../../MultiFilter/MultiFilter';
import competitions from '../../../../../config/competitions';
import selectStyles from '../../../../../config/form-styles';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../context/StrategyBuilderContext';

const CompetitionSelect = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const updateCompetition = (c) => {
    setFilters({ ...filters, competitions: [...c] });
  };

  return (
    <CompetitionSelectWrapper>
      <MultiFilter
        selection={filters.competitions}
        selections={competitions}
        styles={selectStyles}
        title="Competition(s)"
        toggleSelection={updateCompetition}
      />
    </CompetitionSelectWrapper>
  );
};

export default CompetitionSelect;
