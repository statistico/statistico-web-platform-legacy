import { useEffect, useState } from 'react';

import useAsyncError from './useAsyncError';
import resultPresenter from '../presenters/result';

const useFetchesTeamResults = (payload) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const throwError = useAsyncError();

  useEffect(() => {
    resultPresenter(payload)
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

export default useFetchesTeamResults;
