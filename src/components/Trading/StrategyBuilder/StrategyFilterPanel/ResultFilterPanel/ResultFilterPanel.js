import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import ResultFilter from './ResultFilter/ResultFilter';
import ResultFilterPanelWrapper from './ResultFilterPanelWrapper';
import useModal from '../../../../../hooks/useModal';
import Modal from '../../../../Modal/Modal';

const ResultFilterPanel = () => {
  const { isShowing, toggle } = useModal(false);
  const [filters, setFilters] = useState([]);

  const updateFilters = (filter) => {
    setFilters([...filters, filter]);
    toggle();
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
      {filters &&
        filters.map((filter) => {
          return (
            <div>
              <p>{filter.team}</p>
              <p>{filter.result}</p>
              <p>{filter.games}</p>
              <p>{filter.venue}</p>
            </div>
          );
        })}
    </ResultFilterPanelWrapper>
  );
};

export default ResultFilterPanel;
