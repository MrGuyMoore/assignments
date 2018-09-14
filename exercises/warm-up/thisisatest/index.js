var chai = require('chai');
var assert = chai.assert;

var getLongestString = require('/Users/student/dev/assignments/exercises/warm-up/thisisatest/addon.js');

describe('Should produce the longest string', function () {
    it('should return bb', function () {
        assert.equal(getLongestString())
    });
})
