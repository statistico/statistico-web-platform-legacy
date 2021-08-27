import { useEffect, useState } from 'react';
import { Team } from '../types/entity';
import { getCompetitionTeams } from '../gateway/statistico-client';
import competitions from '../config/competitions';

const useFetchesCompetitionTeams = (): {
  teams: Team[];
  loading: boolean;
} => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const ids = competitions.map((c) => c.id);

    getCompetitionTeams(ids, setTeams);

    setLoading(false);
  }, [setLoading, setTeams]);

  return {
    teams,
    loading,
  };
};

export default useFetchesCompetitionTeams;
