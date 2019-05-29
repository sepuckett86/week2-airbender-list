import Component from './Component.js';

import stringToParams from '../string-to-params.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        const alliesParams = stringToParams('allies', character.name);
        const enemiesParams = stringToParams('enemies', character.name);

        if(character.photoUrl) {
            return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}" alt="${character.name}">
                <p><a href="#${alliesParams}">Allies</a></p>
                <p><a href="#${enemiesParams}">Enemies</a></p>
            </li>
        `;
        }
        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="./assets/no-image.png" alt="${character.name}">
                <p><a href="#${alliesParams}">Allies</a></p>
                <p><a href="#${enemiesParams}">Enemies</a></p>
            </li>
        `;  
    }
}

export default CharacterItem;