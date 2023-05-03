import axiosConfig from './axiosConfig';

export const createLobby = async (formData) => {
    const request = await axiosConfig.post('/lobby/create', formData).catch((error) => {
        console.log('error on creating lobby', error);
        return false;
    });

    if (request && request.status === 200) {
        return request.data.key;
    }
};

export const getLobbyData = async (lobbyKey) => {
    const request = await axiosConfig.get(`/lobby/${lobbyKey}`).catch((error) => {
        console.log('error on getting lobby info', error);
        return false;
    });

    if (request && request.status === 200) {
        return request.data.data;
    }
};
