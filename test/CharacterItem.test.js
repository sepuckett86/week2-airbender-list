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
        </li>
    `);
});