import React, { useContext } from 'react';
import { PacmanLoader } from 'react-spinners';

import TradeLoaderWrapper from './TradeLoaderWrapper';
import { StrategyBuilderContext } from '../../../../../context/StrategyBuilderContext';

const TradeLoader = () => {
  const { tr } = useContext(StrategyBuilderContext);

  return (
    <TradeLoaderWrapper>
      <PacmanLoader color="#22ccde" size={80} />
      {tr.length === 0 ? (
        <p>Searching for matching trades...</p>
      ) : (
        <p>{tr.length} trades found</p>
      )}
    </TradeLoaderWrapper>
  );
};

export default TradeLoader;
