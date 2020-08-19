import { useCallback, useEffect, useState } from 'react';

import { teamSeasonsPresenter } from '../presenters/team';
import useAsyncError from './useAsyncError';

const useFetchesTeamSeasons = (id) => {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState({});
  const throwError = useAsyncError();

  const selectedSeasonsToggleHandler = useCallback((s) => {
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
    selectedSeasons,
    selectedSeasonsToggleHandler,
  };
};

export default useFetchesTeamSeasons;
