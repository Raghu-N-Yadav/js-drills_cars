const problem4 = require('../problem4');
const  data = require('./inventory');
const problem5 = require('../problem5');
//const { expect } = require('@jest/globals');
//const { test } = require('picomatch');
//const { expect } = require('@jest/globals');


const yearList =  [...problem4(data)];
const listOfOlderCars = [...problem5(yearList)];

//console.log(listOfOlderCars, listOfOlderCars.length);
//console.log('\n');
//console.log('Total number of older cars are '+ listOfOlderCars.length);

test('testing problem5', () => {
    expect(problem5(yearList)).toEqual([
        1983, 1990, 1995, 1987, 1996,
        1997, 1999, 1987, 1995, 1994,
        1985, 1997, 1992, 1993, 1964,
        1999, 1991, 1997, 1992, 1998,
        1965, 1996, 1995, 1996, 1999
      ]);
    expect(listOfOlderCars.length).toBe(25);
});