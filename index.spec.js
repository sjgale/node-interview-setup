let add = require('./');
let assert = require('assert');

describe('add()', () => {
    it('should return the sum of two numbers', () => {
        assert(3, add(1,2))
    })
})