import axios from './axios-client';

import trades from '../config/trades';

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

export const buildStrategy = async (payload) => {
  console.log('Strategy request made');
  // const response = await axios.post('/v1/strategy/trade-search');
  return trades;
};
