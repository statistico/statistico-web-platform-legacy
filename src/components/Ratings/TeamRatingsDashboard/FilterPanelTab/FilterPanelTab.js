import React from 'react';
import { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

import FilterPanelTabWrapper from './FilterPanelTab.styles';

const FilterPanelTab = (props) => {
  const { click } = props;

  return (
    <FilterPanelTabWrapper onClick={click}>
      <FontAwesomeIcon icon={faCogs} size="2x" className="icon" />
    </FilterPanelTabWrapper>
  );
};

FilterPanelTab.propTypes = {
  click: func.isRequired,
};

export default FilterPanelTab;
