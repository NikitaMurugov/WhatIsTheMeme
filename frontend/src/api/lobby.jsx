import axiosConfig from './axiosConfig';

export const createLobby = (formData) => {
    axiosConfig
        .post('/lobby/create', formData)
        .then((response) => {
            console.log('response', response);
        })
        .catch((error) => {
            console.log('error', error);
        });
};
