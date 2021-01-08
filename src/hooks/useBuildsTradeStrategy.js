import { useCallback, useState } from 'react';

import trades from '../config/trades';

const useBuildsTradeStrategy = (
  competitions,
  line,
  market,
  runner,
  minOdds,
  maxOdds,
  resultFilters,
  statFilters
) => {
  const [tr, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      console.log(competitions);
      console.log(line);
      console.log(market);
      console.log(runner);
      console.log(minOdds);
      console.log(maxOdds);
      console.log(resultFilters);
      console.log(statFilters);
      setTrades(trades);
      setLoading(false);
    }, 2000);
  }, [
    competitions,
    line,
    market,
    runner,
    minOdds,
    maxOdds,
    resultFilters,
    statFilters,
    setLoading,
    setTrades,
  ]);
  return {
    tr,
    loading,
    reload: load,
  };
};

export default useBuildsTradeStrategy;
