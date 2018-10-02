const {assert} = require('chai');

const validateIP = require('./app');

const testCases = [
    '123.123.123.',
    '256.256.256.256',
    'abc.abc.abc.abc',
    '123.76.129.1'
];

describe('Validate IP test',()=>{
    it('should return false', ()=> {
        assert.isFalse(testCases[0])
    });
    it('should return true', ()=> {
        assert.isTrue(testCases[4])
    });
})
