import * as chai from "chai";
const {assert} = require(chai);

const checkDataTypes = require('./check-data');

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]];
const multiD2 = [[true,false,true],[false,false,true]]

describe('Test data types', () =>{
    it('should return false ', ()=> {
        assert.isFalse(checkDataTypes(notSameDataTypes))
    });
    it('should return true', ()=> {
        assert.isTrue(checkDataTypes(sameDataType))
    });
});
