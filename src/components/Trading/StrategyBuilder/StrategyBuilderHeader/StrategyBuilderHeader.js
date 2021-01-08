import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
  const { buildStrategy, filterActive, toggleFilters } = props;

  return (
    <StrategyBuilderRow>
      <Title>Strategy Builder</Title>
      <IconCollection filterActive={filterActive}>
        <FontAwesomeIcon
          icon={faFilter}
          size="2x"
          onClick={() => toggleFilters(!filterActive)}
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
  buildStrategy: func.isRequired,
  filterActive: bool.isRequired,
  toggleFilters: func.isRequired,
};

export default StrategyBuilderHeader;
