import axios from 'axios';
import { api_url } from '../helpers/config';

const instance = axios.create({
    baseURL: api_url
});
const createLobby = async (people_count = 5, creator = 'User') => {
    const response = await instance.post('create/lobby', {
        people_count,
        creator
    });
    return await response.data;
};
const getLobby = async (code) => {
    const response = await instance.get(`create/lobby/${code}`);
    return await response.data;
};

export { createLobby };
export { getLobby };
