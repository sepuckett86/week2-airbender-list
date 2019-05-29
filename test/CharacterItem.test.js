import CharacterItem from '../src/components/CharacterItem.js';

const test = QUnit.test;

QUnit.module('Character Item');

test('returns Character Item html', assert => {
    const character = {
        '_id': '5cdf0769b6e02a467e3e766b',
        'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        'name': '46th Earth King'
    };
    const characterItem = new CharacterItem({ character });
    const actual = characterItem.renderTemplate();
    assert.htmlEqual(actual, /*html*/ `
        <li>
            <h2>46th Earth King</h2>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
            <p><a href="#allies=46th+Earth+King">Allies</a></p>
            <p><a href="#enemies=46th+Earth+King">Enemies</a></p>
        </li>
    `);
});

test('returns no-image png if character has no image', assert => {
    const character = {
        '_id': '5cdf0769b6e02a467e3e76f3',
        'name': 'Guri'  
    };
    const characterItem = new CharacterItem({ character });
    const actual = characterItem.renderTemplate();
    assert.htmlEqual(actual, /*html*/ `
        <li>
            <h2>Guri</h2>
            <img src="./assets/no-image.png" alt="Guri">
            <p><a href="#allies=Guri">Allies</a></p>
            <p><a href="#enemies=Guri">Enemies</a></p>
        </li>
    `);
});