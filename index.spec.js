let add = require('./');
let assert = require('assert');

describe('add()', () => {
    it('should return the sum of two numbers', () => {
        assert.equal(add(1,2), 3)
    })
})