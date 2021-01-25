import { useCallback, useEffect, useState } from 'react';

import buildStrategyPresenter from '../presenters/strategy';
import useAsyncError from './useAsyncError';

const useBuildsStrategy = (filters) => {
  const [tr, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);
  // const throwError = useAsyncError();

  // const loadTrades = useCallback(() => {
  //   console.log('Hello');
  //   setLoading(true);
  //
  //   setTimeout(() => {
  //     console.log('Inside timeout');
  //     setTrades([]);
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  const loadTrades = useCallback(() => {
    console.log(`Hello inside callback`);
    const payload = {
      competitions: [],
      line: null,
      market: null,
      maxOdds: null,
      minOdds: null,
      resultFilters: [],
      runner: null,
      statFilters: [],
    };

    setLoading(true);

    buildStrategyPresenter(payload)
      .then((t) => {
        setTrades(t);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    loadTrades();
  });

  return {
    tr,
    loading,
    loadTrades,
  };
};

export default useBuildsStrategy;
