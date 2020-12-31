import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <p onClick={() => updateFilters({ name: 'Hello', value: 'World' })}>
          Hi there I am the modal
        </p>
      </Modal>
      <div>
        <FontAwesomeIcon icon={faPlusCircle} size="1x" onClick={toggle} />
        <span>Add result based filter</span>
      </div>
      {filters &&
        filters.map((filter) => {
          return (
            <p>
              {filter.name}: {filter.value}
            </p>
          );
        })}
    </ResultFilterPanelWrapper>
  );
};

export default ResultFilterPanel;
