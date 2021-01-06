import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Modal from '../../../../Modal/Modal';
import ResultFilter from './ResultFilter/ResultFilter';
import FilterPanelWrapper from './FilterPanelWrapper';
import useModal from '../../../../../hooks/useModal';

const FilterPanel = (props) => {
  const { isShowing, toggle } = useModal(false);
  const { filters, updateFilters } = props;

  const addFilter = (filter) => {
    updateFilters([...filters, filter]);
    toggle();
  };

  return (
    <FilterPanelWrapper>
      <Modal clicked={toggle} show={isShowing}>
        <ResultFilter addFilter={addFilter} />
      </Modal>
      <div>
        <FontAwesomeIcon icon={faPlusCircle} size="1x" onClick={toggle} />
        <span>Result Filter</span>
      </div>
    </FilterPanelWrapper>
  );
};

FilterPanel.propTypes = {
  filters: arrayOf(
    shape({
      team: string.isRequired,
      result: string.isRequired,
      games: string.isRequired,
      venue: string.isRequired,
    })
  ).isRequired,
  updateFilters: func.isRequired,
};

export default FilterPanel;
