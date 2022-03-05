//const { expect } = require('@jest/globals');
//const { test } = require('picomatch');
const problem6 = require('../problem6');
const data = require('./inventory');
const problem6Output = require('./problem6Output')

let buyer_interested = problem6(data);

//coverting JSON data to javaScript
//const dataBuffer = buyer_interested.toString();
//const javaScriptData =  JSON.parse(dataBuffer)

//console.log(javaScriptData);

//console.log(buyer_interested);

test('testing problem6', () => {
    expect(buyer_interested).toEqual(JSON.stringify(problem6Output.BMWandAudi));
});