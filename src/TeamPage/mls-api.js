import request from 'superagent';

/*
const URL = process.env.REACT_APP_API_URL;
*/

export function fetchMls() {
    return request.get(`https://intense-cliffs-84211.herokuapp.com/mls`);
}

export function fetchConferences() {
    return request.get(`https://intense-cliffs-84211.herokuapp.com/conferences`);
}

export function fetchMlsTeam(id) {
    return request.get(`https://intense-cliffs-84211.herokuapp.com/mls/${id}`);
}

export function createNewMlsTeam(mlsData) {
    return request.post(`https://intense-cliffs-84211.herokuapp.com/mls`, mlsData);
}

export function deleteMlsTeam(id) {
    return request.delete(`https://intense-cliffs-84211.herokuapp.com/mls/${id}`);
}

export function updateMlsTeam(id, updateMlsTeam) {
    return request.put(`https://intense-cliffs-84211.herokuapp.com/mls/${id}`, updateMlsTeam);
}
