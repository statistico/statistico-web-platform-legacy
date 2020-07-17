import { useEffect, useReducer, useState } from 'react';

import resultPresenter from '../presenters/result';
import useAsyncError from './useAsyncError';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_VENUE':
      return {
        ...state,
        team: {
          ...state.team,
          venue: action.venue,
        },
      };
    default:
      return state;
  }
};

const useFetchTeamReducer = (payload) => {
  const [state, dispatch] = useReducer(reducer, payload);
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

export default useFetchTeamReducer;
