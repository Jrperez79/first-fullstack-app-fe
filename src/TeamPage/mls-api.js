import request from 'superagent';

/*
const URL = process.env.REACT_APP_API_URL;
*/

export function fetchMls() {
    return request.get(`https://intense-cliffs-84211.herokuapp.com/mls`);
}

export function fetchMlsTeam(id) {
    return request.get(`https://intense-cliffs-84211.herokuapp.com/mls/${id}`);
}

export function createNewMlsTeam(mlsData) {
    return request.post(`https://intense-cliffs-84211.herokuapp.com/mls`, mlsData);
}
