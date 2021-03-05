import React, { useContext } from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../context/StrategyBuilderContext';
import StrategyBuilderRow from '../StrategyBuilderRow';

const Title = styled.div`
  color: #22ccde;
  font-size: 32px;
  font-weight: 500;
  padding: 20px 0 26px 15px;
`;

const IconCollection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    cursor: pointer;
    color: ${(props) => (props.filterActive ? '#22ccde' : '#dedcdc')};

    :hover {
      color: ${(props) => (!props.filterActive ? '#22ccde' : '#dedcdc')};
    }
  }
`;

const StrategyBuilderHeader = (props) => {
  const { filtersActive, setBuilding, toggleFilters } = props;
  const { loadTrades } = useContext(StrategyBuilderActionContext);
  const { tr, loading } = useContext(StrategyBuilderContext);

  const buildStrategy = () => {
    toggleFilters(false);
    setBuilding(true);
    loadTrades();
  };

  return (
    <StrategyBuilderRow>
      <Title>Strategy Builder</Title>
      <div>
        {loading && tr.length > 0 ? `Trades Returned ${tr.length}` : null}
      </div>
      <IconCollection filterActive={filtersActive}>
        <FontAwesomeIcon
          icon={faFilter}
          size="2x"
          onClick={() => toggleFilters(!filtersActive)}
        />
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="2x"
          onClick={() => buildStrategy()}
        />
      </IconCollection>
    </StrategyBuilderRow>
  );
};

StrategyBuilderHeader.propTypes = {
  filtersActive: bool.isRequired,
  setBuilding: func.isRequired,
  toggleFilters: func.isRequired,
};

export default StrategyBuilderHeader;
