import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import Loading from './Loading.js';

import api from '../services/api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');
        
        const header = new Header();
        const headerDOM = header.render();

        const characterList = new CharacterList({ characters: [] });
        const characterListDOM = characterList.render();

        const loading = new Loading({ loaded: true });
        const loadingDOM = loading.render();
        
        dom.prepend(headerDOM);
        dom.appendChild(loadingDOM);
        main.appendChild(characterListDOM);

        function updateCharacters() {
            loading.update({ loaded: false });
            const params = window.location.hash.slice(1);

            api.getCharacters(params)
                .then(response => {
                    characterList.update({ characters: response });
                })
                .finally(() => {
                    loading.update({ loaded: true });
                });
        }
        
        window.addEventListener('hashchange', () => {
            updateCharacters();
        });

        updateCharacters();

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;