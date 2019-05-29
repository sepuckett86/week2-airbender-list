import stringToParams from '../src/string-to-params.js';

const test = QUnit.test;

test('convert string with spaces to params', assert => {
    const string = '26th King';
    const key = 'allies';
    const expected = 'allies=26th+King';
    const actual = stringToParams(key, string);
    assert.equal(actual, expected);
});