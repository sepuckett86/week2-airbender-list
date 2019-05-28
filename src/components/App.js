import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');
        
        const header = new Header();
        const headerDOM = header.render();

        const characterList = new CharacterList();
        const characterListDOM = characterList.render();
        
        dom.prepend(headerDOM);
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