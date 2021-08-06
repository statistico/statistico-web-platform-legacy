import React from 'react';
import { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import CompetitionList from './CompetitionList/CompetitionList';
import FilterPanelWrapper from './FilterPanel.styles';

const FilterPanel = (props) => {
  const { click } = props;

  return (
    <FilterPanelWrapper>
      <div>Select a competition</div>
      <CompetitionList toggle={() => {}} />
      <FontAwesomeIcon
        icon={faTimesCircle}
        size="1x"
        className="icon"
        onClick={click}
      />
    </FilterPanelWrapper>
  );
};

FilterPanel.propTypes = {
  click: func.isRequired,
};

export default FilterPanel;
