import { useEffect, useState } from 'react';

import teamStatPresenter from '../presenters/team_stat';
import useAsyncError from './useAsyncError';

const useFetchesTeamStat = (
  dateAfter,
  dateBefore,
  limit,
  opponent,
  seasonIds,
  stat,
  teamId,
  venue
) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const throwError = useAsyncError();

  useEffect(() => {
    const payload = {
      dateAfter,
      dateBefore,
      limit,
      opponent,
      seasonIds,
      sort: 'date_asc',
      stat,
      team: {
        id: teamId,
        venue,
      },
    };

    setLoading(true);

    teamStatPresenter(payload)
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((error) => {
        throwError(error);
      });
  }, [
    dateAfter,
    dateBefore,
    teamId,
    limit,
    opponent,
    seasonIds,
    stat,
    venue,
    throwError,
  ]);

  return {
    stats,
    loading,
  };
};

export default useFetchesTeamStat;
