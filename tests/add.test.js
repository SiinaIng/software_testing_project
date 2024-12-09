import add from '../src/add.js';

test('adds two positive numbers', () => {
    expect(add(3, 3)).toBe(6); 
});

test('adds two negative numbers', () => {
    expect(add(-3, -3)).toBe(-6); 
});

test('adds a positive and negative number', () => {
    expect(add(-3, 7)).toBe(4); 
});

test('adds zero to a number', () => {
    expect(add(0, 5)).toBe(5); 
    expect(add(5, 0)).toBe(5); 
});

test('adds two large numbers', () => {
    expect(add(1000000, 2000000)).toBe(3000000); 
});

test('adds two decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4.0);
});

// Failed
test('throws an error for non-numeric inputs', () => {
    expect(() => add('3', 3)).toThrow(); //string
    expect(() => add(null, 3)).toThrow(); //null
    expect(() => add(undefined, 3)).toThrow(); //undefined
    expect(() => add(3, {})).toThrow(); //object
});


test('adds a number and Infinity', () => {
    expect(add(Infinity, 5)).toBe(Infinity);
    expect(add(-Infinity, 5)).toBe(-Infinity);
});

test('adds a number and NaN', () => {
    expect(add(NaN, 5)).toBeNaN();
    expect(add(5, NaN)).toBeNaN();
});

