import React, { useState, createContext, useMemo, useCallback } from 'react';
import { node } from 'prop-types';

import { buildStrategy, saveStrategy } from '../gateway/statistico-grpc';

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
    side: null,
    statFilters: [],
  });
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [built, setBuilt] = useState(false);
  const [saved, setSaved] = useState(false);

  const update = useCallback(
    (t) => {
      setTrades((prev) => {
        return [...prev, t];
      });
    },
    [setTrades]
  );

  const build = useCallback(() => {
    setTrades([]);
    setLoading(true);
    setBuilt(false);

    buildStrategy(
      filters,
      update,
      () => {
        setLoading(false);
        setBuilt(true);
      },
      (e) => {
        console.log(e);
      }
    );
  }, [setLoading, filters, update]);

  const save = useCallback(
    (name, description, stakingPlan) => {
      setLoading(true);
      setSaved(false);

      saveStrategy(
        name,
        description,
        stakingPlan,
        filters,
        () => setSaved(true),
        (e) => {
          setLoading(false);
          setError(e);
        }
      );
    },
    [filters, setLoading, setError]
  );

  const store = useMemo(
    () => ({
      built,
      error,
      filters,
      loading,
      saved,
      trades,
    }),
    [built, error, filters, loading, saved, trades]
  );

  const actions = {
    setFilters,
    build,
    save,
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
