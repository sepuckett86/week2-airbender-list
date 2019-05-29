import Component from './Component.js';

import stringToParams from '../string-to-params.js';

class Header extends Component {
    renderTemplate() {
        const waterParams = stringToParams('nation', 'water');
        const earthParams = stringToParams('nation', 'earth');
        const fireParams = stringToParams('nation', 'fire');
        const airParams = stringToParams('nation', 'air');

        return /*html*/ `
            <header>
                <section>
                    <a href="#${waterParams}"><img src="./assets/water.png"></a>
                    <a href="#${earthParams}"><img src="./assets/earth.png"></a>
                    <h1>Avatar Characters</h1>
                    <a href="#${fireParams}"><img src="./assets/fire.png"></a>
                    <a href="#${airParams}"><img src="./assets/air.png"></a>
                </section>
                <a class="center" href="">ALL</a>
            </header>
        `;
    }
}

export default Header;