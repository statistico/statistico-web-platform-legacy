import { useEffect, useState } from 'react';

import useAsyncError from './useAsyncError';
import { getTeam } from '../packages/api';

const useFetchesTeam = (id) => {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const throwError = useAsyncError();

  useEffect(() => {
    getTeam(id)
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch((error) => {
        throwError(error);
      });
  }, [id, throwError]);

  return {
    team,
    loading,
  };
};

export default useFetchesTeam;
