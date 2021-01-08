import { useCallback, useState } from 'react';

import trades from '../config/trades';

const useBuildsTradeStrategy = () => {
  const [tr, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      setTrades(trades);
      setLoading(false);
    }, 2000);
  }, []);
  return {
    tr,
    loading,
    reload: load,
  };
};

export default useBuildsTradeStrategy;
