import React, { useContext } from 'react';
import { PacmanLoader } from 'react-spinners';

import TradeLoaderWrapper from './TradeLoaderWrapper';
import { StrategyBuilderContext } from '../../../../../context/StrategyBuilderContext';

const TradeLoader = () => {
  const { trades } = useContext(StrategyBuilderContext);

  return (
    <TradeLoaderWrapper>
      <PacmanLoader color="#22ccde" size={80} />
      {trades.length === 0 ? (
        <p>Searching for matching trades...</p>
      ) : (
        <p>
          {trades.length}
          {' '}
          trades found
        </p>
      )}
    </TradeLoaderWrapper>
  );
};

export default TradeLoader;
