import { useEffect, useState } from 'react';
import { Team } from '../types/entity';
import getCompetitionTeams from '../gateway/statistico-client';
import competitions from '../config/competitions';

const useFetchesCompetitionTeams = (): {
  teams: Team[];
  loading: boolean;
  error: string | null;
} => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ids = competitions.map((c) => c.id);

    getCompetitionTeams(ids, setTeams, setError);

    setLoading(false);
  }, [setLoading, setTeams]);

  return {
    teams,
    loading,
    error,
  };
};

export default useFetchesCompetitionTeams;
