import Component from './Component.js';
import CharacterItem from './CharacterItem.js';

class CharacterList extends Component {
    render() {
        const dom = this.renderDOM();

        const characters = this.props.characters;

        characters.forEach(character => {
            const characterItem = new CharacterItem({ character });
            const characterItemDOM = characterItem.render();
            dom.appendChild(characterItemDOM);
        });
        
        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <ul>
            </ul>
        `;
    }
}

export default CharacterList;