const assert = require('assert');
describe('Index file to be tested', () => {
    context('Basic setup to be tested', ()=> {
        it ('should not be equal', ()=>{
            assert.notEqual(1, 2);
        })

        it ('should be equal', ()=>{
            assert.equal(1, 1);
        })

        it ('should be equal', ()=>{
            assert.equal('joe', 'joe');
        })

        it ('should not be deep equal', ()=>{
            assert.notDeepEqual({name: 'foo'}, {name: 'bar'});
        })

        it ('should be deep equal', ()=>{
            assert.deepEqual({name: 'joe'}, {name: 'joe'});
        })

        it ('This is pending test');    // without a callback is pending
    })
});