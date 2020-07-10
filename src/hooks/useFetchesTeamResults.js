import { useEffect, useState } from 'react';

import useAsyncError from './useAsyncError';
import { getTeamResults } from '../packages/api';

const useFetchesTeamResult = (payload) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const throwError = useAsyncError();

  useEffect(() => {
    getTeamResults(payload)
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((error) => {
        throwError(error);
      });
  }, []);

  return {
    results,
    loading,
  };
};

export default useFetchesTeamResult;
