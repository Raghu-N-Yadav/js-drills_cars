//const { expect } = require('@jest/globals');
//const { test } = require('picomatch');
const problem2 = require('../problem2') ;

const  data = require('./inventory');

//problem2.result(data.inventory);

test('testing problem2', () => {
    expect(problem2(data)).toBe('Last car is a Lincoln Town Car')
});





//output = Last car is a Lincoln Town Car