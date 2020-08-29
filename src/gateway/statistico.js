import axios from './axios-client';

export const getTeam = async (id) => {
  const response = await axios.get(`/team/${id}`);
  return response.data.data.team;
};

export const getTeamResults = async (payload) => {
  const response = await axios.post('/result-search', payload);
  return response.data.data.results;
};

export const getTeamSeasons = async (id) => {
  const response = await axios.get(`/team/${id}/seasons?sort=name_desc`);
  return response.data.data.seasons;
};

export const getTeamStats = async (payload) => {
  const response = await axios.post('/team-stat-search', payload);
  return response.data.data.stats;
};
