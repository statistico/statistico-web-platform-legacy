import { useEffect, useReducer, useState } from 'react';

import requestPayloadReducer from '../reducers/request';
import resultPresenter from '../presenters/result';
import useAsyncError from './useAsyncError';

const useFetchesTeamResults = (payload) => {
  const [state, dispatch] = useReducer(requestPayloadReducer, payload);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const throwError = useAsyncError();

  useEffect(() => {
    resultPresenter(state)
      .then((data) => {
        setLoading(true);
        setResults(data);
        setLoading(false);
      })
      .catch((error) => {
        throwError(error);
      });
  }, [state, throwError]);

  return {
    results,
    loading,
    dispatch,
  };
};

export default useFetchesTeamResults;
