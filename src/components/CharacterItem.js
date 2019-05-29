import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        if(character.photoUrl) {
            return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}" alt="${character.name}">
                <p><a href="">Allies</a></p>
                <p><a href="">Enemies</a></p>
            </li>
        `;
        }
        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="./assets/no-image.png" alt="${character.name}">
                <p><a href="">Allies</a></p>
                <p><a href="">Enemies</a></p>
            </li>
        `;  
    }
}

export default CharacterItem;