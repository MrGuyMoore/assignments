var chai = require('chai');

var assert = chai.assert;

var sum = require('/Users/student/dev/assignments/exercises/test/app.js');

describe ('Testing sum function', function() {
    it('It should return 8', function () {
        assert.equal(sum(5,3),8)
    });
    it('should return -14', function () {
        assert.equal(sum(-4,-14)-14)
    });
    it('should return 0 ', function () {
        assert.equal(sum(0,0),0);
    });
    it('should return -2 ', function () {
        assert.equal(sum(-5,3)-2);
    });
});