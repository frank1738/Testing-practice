const stringLength = require('./string.js');
const reverseString = require('./reverse.js');
const calculator = require('./calculator.js');
const Calculator = require('./calculator.js');
const capitalizeString = require('./capitalize.js');
const test1 = new Calculator(4, 2);
const test2 = new Calculator(6, 3);
const test3 = new Calculator(8, 4);
test('validate string length ', () => {
  expect(stringLength('frank')).toBe(true);
});

test('reverse string', () => {
  expect(reverseString('frank')).toBe('knarf');
});

describe('addition', () => {
  test('test1', () => {
    expect(test1.add()).toBe(6);
  });
  test('test2 ', () => {
    expect(test2.add()).toBe(9);
  });
  test('test3 ', () => {
    expect(test3.add()).toBe(12);
  });
});

describe('subtraction', () => {
  test('test1', () => {
    expect(test1.subtract()).toBe(2);
  });
  test('test2 ', () => {
    expect(test2.subtract()).toBe(3);
  });
  test('test3 ', () => {
    expect(test3.subtract()).toBe(4);
  });
});

describe('multiplication', () => {
  test('test1', () => {
    expect(test1.multiply()).toBe(8);
  });
  test('test2 ', () => {
    expect(test2.multiply()).toBe(18);
  });
  test('test3 ', () => {
    expect(test3.multiply()).toBe(32);
  });
});

describe('division', () => {
  test('test1', () => {
    expect(test1.divide()).toBe(2);
  });
  test('test2 ', () => {
    expect(test2.divide()).toBe(2);
  });
  test('test3 ', () => {
    expect(test3.divide()).toBe(2);
  });
});
test('capitalize', () => {
  expect(capitalizeString('frank')).toBe('Frank');
});
