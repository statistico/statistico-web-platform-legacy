import { useEffect, useState } from 'react';

import { teamSeasonsPresenter } from '../presenters/team';
import useAsyncError from './useAsyncError';

const useFetchesTeamSeasons = (id) => {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState({});
  const throwError = useAsyncError();

  useEffect(() => {
    teamSeasonsPresenter(id)
      .then((data) => {
        setSeasons(data);

        data.forEach((s) => {
          if (s.current) {
            setSelectedSeasons(s);
          }
        });
      })
      .catch((error) => throwError(error));
  }, [id, throwError]);

  return {
    seasons,
    selectedSeasons,
    setSelectedSeasons,
  };
};

export default useFetchesTeamSeasons;
