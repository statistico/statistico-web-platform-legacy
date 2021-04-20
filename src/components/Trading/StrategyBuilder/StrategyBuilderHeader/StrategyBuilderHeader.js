import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faFilter,
  faSave,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import MissingFilterError from './MissingFilterError/MissingFilterError';
import Modal from '../../../Modal/Modal';
import SaveStrategyForm from './SaveStrategyForm/SaveStrategyForm';
import StrategyBuilderHeaderWrapper from './StrategyBuilderHeaderWrapper';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../context/StrategyBuilderContext';

const Title = styled.div`
  color: #22ccde;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 26px;
    padding: 10px 5px 10px 5px;
  }
`;

const IconCollection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 38px;

  svg {
    cursor: pointer;
    margin: 0 10px 0 10px;
    color: #ccc;
  }

  @media (max-width: 768px) {
    font-size: 22px;

    svg {
      margin: 0 5px 0 5px;
    }
  }
`;

const StrategyBuilderHeader = (props) => {
  const { filtersActive, selectFilters, selectTrades, tradesActive } = props;
  const [hasError, setHasError] = useState(false);
  const [showSaveForm, setShowSaveForm] = useState(false);
  const { loadTrades } = useContext(StrategyBuilderActionContext);
  const { filters, loading } = useContext(StrategyBuilderContext);

  const clickFilters = () => {
    selectFilters(true);
    selectTrades(false);
  };

  const clickTrades = () => {
    selectTrades(true);
    selectFilters(false);
  };

  const buildStrategy = () => {
    if (
      !filters.line ||
      !filters.market ||
      (!filters.maxOdds && !filters.minOdds) ||
      !filters.runner ||
      !filters.side ||
      filters.competitions.length === 0
    ) {
      setHasError(true);
      return;
    }
    selectTrades(true);
    selectFilters(false);
    loadTrades();
  };

  if (loading) {
    return null;
  }

  return (
    <StrategyBuilderHeaderWrapper>
      <Title>Strategy Builder</Title>
      <Modal clicked={() => setHasError(false)} show={hasError}>
        <MissingFilterError />
      </Modal>
      <Modal clicked={() => setShowSaveForm(false)} show={showSaveForm}>
        <SaveStrategyForm />
      </Modal>
      <IconCollection>
        <FontAwesomeIcon
          icon={faFilter}
          onClick={() => clickFilters()}
          style={{ color: filtersActive ? '#22ccde' : '#ccc' }}
        />
        <FontAwesomeIcon
          icon={faChartLine}
          onClick={() => clickTrades()}
          style={{ color: tradesActive ? '#22ccde' : '#ccc' }}
        />
        <FontAwesomeIcon icon={faSave} onClick={() => setShowSaveForm(true)} />
        <FontAwesomeIcon
          icon={faSearch}
          onClick={() => buildStrategy()}
          style={{ color: loading ? '#22ccde' : '#ccc' }}
        />
      </IconCollection>
    </StrategyBuilderHeaderWrapper>
  );
};

StrategyBuilderHeader.propTypes = {
  filtersActive: bool.isRequired,
  selectFilters: func.isRequired,
  selectTrades: func.isRequired,
  tradesActive: bool.isRequired,
};

export default StrategyBuilderHeader;
