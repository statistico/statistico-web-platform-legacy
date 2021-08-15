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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const ids = competitions.map((c) => c.id);

  useEffect(() => {
    setLoading(true);
    getCompetitionTeams(ids, setTeams, setError);
    setLoading(false);
  }, []);

  return {
    teams,
    loading,
    error,
  };
};

export default useFetchesCompetitionTeams;
