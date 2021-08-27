import { useEffect, useState } from 'react';
import { Season } from '../types/entity';
import { getTeamSeasons } from '../gateway/statistico-client';

const useFetchesTeamSeasons = (
  teamId: number,
  includeCup: boolean,
  sort: string
): {
  seasons: Season[];
  loading: boolean;
} => {
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTeamSeasons(teamId, includeCup, sort, setSeasons);

    setLoading(false);
  }, [teamId, includeCup, sort, setLoading, setSeasons]);

  return {
    seasons,
    loading,
  };
};

export default useFetchesTeamSeasons;
