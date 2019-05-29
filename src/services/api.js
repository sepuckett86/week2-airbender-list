import stringToParams from '../string-to-params.js';

const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters/';

const api = {
    getCharacters() {
        return fetch(URL)
            .then(response => response.json());
    },
    getAllies(characterName) {
        const nameParams = stringToParams(characterName);
        const url = `${URL}/api/v1/characters?allies=${nameParams}`;
        return fetch(url)
            .then(response => response.json());
    },
    getEnemies(characterName) {
        const nameParams = stringToParams(characterName);
        const url = `${URL}/api/v1/characters?enemies=${nameParams}`;
        return fetch(url)
            .then(response => response.json());
    },
    getNation(nation) {
        const nationParams = stringToParams(nation);
        const url = `${URL}/api/v1/characters?nation=${nationParams}`;
        return fetch(url)
            .then(response => response.json());
    }
};

export default api;