import { useEffect, useState } from 'react';

import resultPresenter from '../presenters/result';
import useAsyncError from './useAsyncError';

const useFetchesTeamResults = (teamId, seasonIds, venue) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const throwError = useAsyncError();

  useEffect(() => {
    const payload = {
      team: {
        id: teamId,
        venue,
      },
      seasonIds,
      sort: 'date_asc',
      limit: null,
      dateBefore: new Date().toISOString(),
    };

    setLoading(true);

    resultPresenter(payload)
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((error) => {
        throwError(error);
      });
  }, [teamId, seasonIds, venue, throwError]);

  return {
    results,
    loading,
  };
};

export default useFetchesTeamResults;
