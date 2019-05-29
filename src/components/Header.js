import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/ `
            <header>
                <section>
                    <img src="./assets/water.png">
                    <img src="./assets/earth.png">
                    <h1>Avatar Characters</h1>
                    <img src="./assets/fire.png">
                    <img src="./assets/air.png">
                </section>
            </header>
        `;
    }
}

export default Header;