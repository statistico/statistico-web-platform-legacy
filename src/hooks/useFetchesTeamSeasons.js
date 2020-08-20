import { useCallback, useEffect, useState } from 'react';

import { teamSeasonsPresenter } from '../presenters/team';
import useAsyncError from './useAsyncError';

const useFetchesTeamSeasons = (id) => {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeasons] = useState({});
  const throwError = useAsyncError();

  const toggleSeason = useCallback((s) => {
    setSelectedSeasons(s);
  }, []);

  useEffect(() => {
    teamSeasonsPresenter(id)
      .then((data) => {
        const current = data.find((s) => s.current === true);
        setSelectedSeasons(current);
        setSeasons(data);
      })
      .catch((error) => throwError(error));
  }, [id, throwError]);

  return {
    seasons,
    selectedSeason,
    toggleSeason,
  };
};

export default useFetchesTeamSeasons;
