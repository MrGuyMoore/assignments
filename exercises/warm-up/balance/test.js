const {assert} = require ('chai');

const balanceP = require('./balance');

const testCases = [

];


describe('Testing parentheses warmup', ()=>{
    it('should return true', ()=> {
        assert.isTrue(balanceP(testCases))
    });
});