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

        const loading = new Loading({ loaded: false });
        const loadingDOM = loading.render();
        
        api.getCharacters().then(response => {
            characterList.update({ characters: response });
            loading.update({ loaded: true });
        });
        
        dom.prepend(headerDOM);
        main.appendChild(loadingDOM);
        main.appendChild(characterListDOM);

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