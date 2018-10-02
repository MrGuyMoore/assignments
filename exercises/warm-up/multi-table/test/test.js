const chai = require('chai');
const assert = chai.assert;

const multTable = require('../../app');

const expected = [
    [1,2,3,4,5],
    [2,4,6,8,10],
    [3,6,9,12,15],
    [4,8,12,16,20],
    [5,10,15,20,25]
];

describe('Testing mul table function',()=>{
    it('should return a 5x5 mul table',()=>{
        assert.deepEqual(multTable(5),expected)
    })
});
