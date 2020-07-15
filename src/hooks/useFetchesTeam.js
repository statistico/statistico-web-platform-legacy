import { useEffect, useState } from 'react';

import useAsyncError from './useAsyncError';
import teamPresenter from '../presenters/team';

const useFetchesTeam = (id) => {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const throwError = useAsyncError();

  useEffect(() => {
    teamPresenter(id)
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch((error) => {
        throwError(error);
      });
  }, []);

  return {
    team,
    loading,
  };
};

export default useFetchesTeam;
