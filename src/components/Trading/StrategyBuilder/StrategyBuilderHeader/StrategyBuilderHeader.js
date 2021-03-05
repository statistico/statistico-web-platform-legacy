import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSave, faSearch } from '@fortawesome/free-solid-svg-icons';

import StrategyBuilderHeaderWrapper from './StrategyBuilderHeaderWrapper';

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
  }

  @media (max-width: 768px) {
    font-size: 22px;

    svg {
      margin: 0 5px 0 5px;
    }
  }
`;

const StrategyBuilderHeader = () => {
  return (
    <StrategyBuilderHeaderWrapper>
      <Title>Strategy Builder</Title>
      <IconCollection>
        <FontAwesomeIcon icon={faFilter} />
        <FontAwesomeIcon icon={faSave} />
        <FontAwesomeIcon icon={faSearch} />
      </IconCollection>
    </StrategyBuilderHeaderWrapper>
  );
};

export default StrategyBuilderHeader;
