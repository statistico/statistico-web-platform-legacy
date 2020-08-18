import { useEffect, useState } from 'react';

import { teamSeasonsPresenter } from '../presenters/team';
import useAsyncError from './useAsyncError';

const useFetchesTeamSeasons = (id) => {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState(null);
  const throwError = useAsyncError();

  useEffect(() => {
    teamSeasonsPresenter(id)
      .then((data) => {
        setSelectedSeasons(data['2018/2019']);
        data.forEach((s) => {
          if (s.current) {
            setSelectedSeasons(s);
          }
        });

        setSeasons(data);
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
