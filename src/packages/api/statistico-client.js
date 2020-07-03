import axios from './axios-client';

export const getTeam = async id => {
    const response = await axios.get('/team/' + id)
    return response.data.data;
}