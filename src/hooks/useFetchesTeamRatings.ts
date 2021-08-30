import { useEffect, useState } from 'react';
import { TeamRating } from '../types/entity';
import { getTeamRatings } from '../gateway/statistico-client';

const useFetchesTeamRatings = (
  teamId: number,
  seasonId: number,
  sort: string
): {
  ratings: TeamRating[];
  loading: boolean;
} => {
  const [ratings, setRatings] = useState<TeamRating[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTeamRatings(teamId, seasonId, sort, setRatings);

    setLoading(false);
  }, [teamId, seasonId, sort, setLoading, setRatings]);

  return {
    ratings,
    loading,
  };
};

export default useFetchesTeamRatings;
