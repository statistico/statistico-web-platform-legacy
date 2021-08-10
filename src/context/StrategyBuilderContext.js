import React, {
  useState, createContext, useMemo, useCallback,
} from 'react';
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
  const [saveLoading, setSaveLoading] = useState(false);

  const update = useCallback(
    (t) => {
      setTrades((prev) => [...prev, t]);
    },
    [setTrades],
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
        setError(e.message);
      },
    );
  }, [setLoading, filters, update]);

  const save = useCallback(
    (name, description, stakingPlan, visibility) => {
      setSaveLoading(true);
      setSaved(false);

      saveStrategy(
        name,
        description,
        stakingPlan,
        filters,
        visibility,
        () => setSaved(true),
        (e) => {
          setSaveLoading(false);
          setError(e.message);
        },
      );
    },
    [filters, setSaveLoading, setError],
  );

  const store = useMemo(
    () => ({
      built,
      error,
      filters,
      loading,
      saved,
      saveLoading,
      trades,
    }),
    [built, error, filters, loading, saved, saveLoading, trades],
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
