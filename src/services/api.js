const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters/';

const api = {
    getCharacters(params) {
        return fetch(`${URL}?${params}`)
            .then(response => response.json());
    }
};

export default api;