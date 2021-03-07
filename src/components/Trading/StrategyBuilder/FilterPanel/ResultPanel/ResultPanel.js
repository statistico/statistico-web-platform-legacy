import React, { useContext } from 'react';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '../../../../Modal/Modal';
import PanelTitle from '../PanelTitle/PanelTitle';
import ResultPanelWrapper from './ResultPanelWrapper';
import ResultRule from './ResultRule/ResultRule';
import ResultRuleList from './ResultRuleList/ResultRuleList';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../context/StrategyBuilderContext';
import useModal from '../../../../../hooks/useModal';

const ResultPanel = () => {
  const { isShowing, toggle } = useModal(false);
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const addFilter = (filter) => {
    setFilters({
      ...filters,
      resultFilters: [...filters.resultFilters, filter],
    });
    toggle();
  };

  return (
    <ResultPanelWrapper>
      <Modal clicked={toggle} show={isShowing}>
        <ResultRule addFilter={addFilter} />
      </Modal>
      <PanelTitle title="Result Rules">
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="1x"
          onClick={() => toggle()}
        />
      </PanelTitle>
      <ResultRuleList />
    </ResultPanelWrapper>
  );
};

export default ResultPanel;
