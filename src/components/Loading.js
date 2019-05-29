import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        const loaded = this.props.loaded;
        if(loaded) {
            return /*html*/`
            <div></div>
            `;
        }
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