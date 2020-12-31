import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Modal from '../../../../Modal/Modal';
import ResultFilter from './ResultFilter/ResultFilter';
import ResultFilterList from './ResultFilterList/ResultFilterList';
import ResultFilterPanelWrapper from './ResultFilterPanelWrapper';
import useModal from '../../../../../hooks/useModal';

const ResultFilterPanel = () => {
  const { isShowing, toggle } = useModal(false);
  const [filters, setFilters] = useState([]);

  const updateFilters = (filter) => {
    setFilters([...filters, filter]);
    toggle();
  };

  const removeFilter = (i, f) => {
    const newList = f.filter((filter, index) => index !== i);
    setFilters(newList);
  };

  return (
    <ResultFilterPanelWrapper>
      <Modal clicked={toggle} show={isShowing}>
        <ResultFilter addFilter={updateFilters} />
      </Modal>
      <div>
        <FontAwesomeIcon icon={faPlusCircle} size="1x" onClick={toggle} />
        <span>Result Filter</span>
      </div>
      <ResultFilterList filters={filters} removeFilter={removeFilter} />
    </ResultFilterPanelWrapper>
  );
};

export default ResultFilterPanel;
