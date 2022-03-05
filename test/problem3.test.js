const data = require('./inventory');
const problem3 =  require('../problem3');
const problem3Output = require('./problem3Output')
//const { test } = require('picomatch');
//const { expect } = require('@jest/globals');

//let carModelNames = problem3.result(data.inventory);

//console.log(carModelNames);

test('testing problem3', () => {
    expect(problem3(data)).toEqual(problem3Output.output)
});
