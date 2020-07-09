import axios from './axios-client';

export const getTeam = async (id) => {
  const response = await axios.get(`/team/${id}`);
  return response.data.data.team;
};

export const getTeamResults = async (payload) => {
  const response = await axios.post('result-search', payload);
  return response.data.data.results;
};
