import React, { useState, createContext, useMemo, useCallback } from 'react';
import { node } from 'prop-types';

import strategyRequestFromFilters from '../utility/strategy';
import { StrategyServiceClient } from '../proto/strategy_grpc_web_pb';

export const StrategyBuilderContext = createContext(null);
export const StrategyBuilderActionContext = createContext(null);

const StrategyBuilderContextProvider = (props) => {
  const { children } = props;
  const [filters, setFilters] = useState({
    competitions: [],
    line: null,
    market: null,
    maxOdds: null,
    minOdds: null,
    resultFilters: [],
    runner: null,
    statFilters: [],
  });
  const [tr, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTrades = useCallback(() => {
    setTrades([]);
    setLoading(true);

    const request = strategyRequestFromFilters(filters);

    setLoading(true);

    const client = new StrategyServiceClient('http://localhost:8080');
    const stream = client.strategyTradeSearch(request, {});

    stream.on('data', (t) => {
      setTrades((prev) => {
        return [...prev, t.toObject()];
      });
    });

    stream.on('end', (t) => {
      setLoading(false);
    });

    stream.on('error', (t) => {
      console.log('Error', t);
    });
  }, [setLoading, setTrades, filters]);

  const store = useMemo(
    () => ({
      filters,
      tr,
      loading,
    }),
    [filters, loading, tr]
  );

  const actions = {
    setFilters,
    loadTrades,
  };

  return (
    <StrategyBuilderContext.Provider value={store}>
      <StrategyBuilderActionContext.Provider value={actions}>
        {children}
      </StrategyBuilderActionContext.Provider>
    </StrategyBuilderContext.Provider>
  );
};

StrategyBuilderContextProvider.propTypes = {
  children: node.isRequired,
};

export default StrategyBuilderContextProvider;
