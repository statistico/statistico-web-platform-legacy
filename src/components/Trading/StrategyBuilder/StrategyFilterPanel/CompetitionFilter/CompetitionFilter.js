import React, { useState } from 'react';

import CompetitionFilterWrapper from './CompetitionFilterWrapper';
import MultiFilter from '../../../../MultiFilter/MultiFilter';
import competitions from '../../../../../config/competitions';
import selectStyles from '../../../../../config/form-styles';

const CompetitionFilter = () => {
  const [comps, toggleCompetitions] = useState([]);

  return (
    <CompetitionFilterWrapper>
      <MultiFilter
        selection={comps}
        selections={competitions}
        styles={selectStyles}
        title="Competition(s)"
        toggleSelection={toggleCompetitions}
      />
    </CompetitionFilterWrapper>
  );
};

export default CompetitionFilter;
