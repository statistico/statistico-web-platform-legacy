import axios from "./axios-client";

const getTeam = async (id) => {
  const response = await axios.get(`/team/${id}`);
  return response.data.data;
};

export default getTeam;
