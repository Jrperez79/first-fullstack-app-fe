import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function fetchMls() {
    return request.get(`${URL}/mls`);
}

export function fetchMlsTeam(id) {
    return request.get(`${URL}/mls/${id}`);
}

export function createNewMlsTeam(mlsData) {
    return request.post(`${URL}/mls`, mlsData);
}
