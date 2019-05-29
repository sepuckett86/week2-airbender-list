import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        return /*html*/ `
            <div id="loading">
                <section class="white-background">
                    <h2>Loading...</h2>
                    <img src="./assets/aang.gif">
                </section>
            </div>
        `;
    }
}

export default Loading;