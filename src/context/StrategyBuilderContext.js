import React, { useState, createContext, useMemo, useCallback } from 'react';
import { node } from 'prop-types';
import trades from '../config/trades';

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
    setLoading(true);

    setTimeout(() => {
      setTrades(trades);
      setLoading(false);
    }, 2000);
  }, [setLoading, setTrades]);

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
