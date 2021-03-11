import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Modal from '../../../../Modal/Modal';
import PanelTitle from '../PanelTitle/PanelTitle';
import StatPanelWrapper from './StatPanelWrapper';
import StatRule from './StatRule/StatRule';
import StatRuleList from './StatRuleList/StatRuleList';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../context/StrategyBuilderContext';
import useModal from '../../../../../hooks/useModal';

const StatPanel = () => {
  const { isShowing, toggle } = useModal(false);
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const addFilter = (filter) => {
    setFilters({
      ...filters,
      statFilters: [...filters.statFilters, filter],
    });
    toggle();
  };

  return (
    <StatPanelWrapper>
      <Modal clicked={toggle} show={isShowing}>
        <StatRule button="Add" method={addFilter} />
      </Modal>
      <PanelTitle title="Stat Rules">
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="1x"
          onClick={() => toggle()}
        />
      </PanelTitle>
      <StatRuleList />
    </StatPanelWrapper>
  );
};

export default StatPanel;
