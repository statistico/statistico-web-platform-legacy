import React, { useState } from 'react';

import CompetitionSelectWrapper from './CompetitionSelectWrapper';
import MultiFilter from '../../../../MultiFilter/MultiFilter';
import competitions from '../../../../../config/competitions';
import selectStyles from '../../../../../config/form-styles';

const CompetitionSelect = () => {
  const [comps, toggleCompetitions] = useState([]);

  return (
    <CompetitionSelectWrapper>
      <MultiFilter
        selection={comps}
        selections={competitions}
        styles={selectStyles}
        title="Competition(s)"
        toggleSelection={toggleCompetitions}
      />
    </CompetitionSelectWrapper>
  );
};

export default CompetitionSelect;
