//const { expect } = require('@jest/globals');
//const { test } = require('picomatch');
const problem1 = require('../problem1');

const  data = require('./inventory');

//problem1.result(data.inventory,33);

test('Testing problem1', () => {
    expect(problem1(data,33)).toBe('Car 33 is a 2011 Jeep Wrangler')
});

//output = Car 33 is a 2011 Jeep Wrangler