import reduce from '../src/reduce.js';

describe('reduce', () => {
  test('reduces an array to a single value', () => {
    const sum = (acc, n) => acc + n;
    const array = [1, 2, 3, 4];
    const result = reduce(array, sum, 0);
    expect(result).toBe(10);
  });

  test('reduces an array without an explicit accumulator', () => {
    const multiply = (acc, n) => acc * n;
    const array = [2, 3, 4];
    const result = reduce(array, multiply);
    expect(result).toBe(24);
  });

  test('reduces an object to a single value', () => {
    const sumValues = (acc, value) => acc + value;
    const obj = { a: 1, b: 2, c: 3 };
    const result = reduce(obj, sumValues, 0);
    expect(result).toBe(6);
  });

  test('reduces an object without an explicit accumulator', () => {
    const concatKeys = (acc, value, key) => acc + key;
    const obj = { a: 1, b: 2, c: 3 };
    const result = reduce(obj, concatKeys, '');
    expect(result).toBe('abc');
  });

  test('handles an empty array with explicit accumulator', () => {
    const sum = (acc, n) => acc + n;
    const result = reduce([], sum, 0);
    expect(result).toBe(0);
  });

  // Failed
  test('handles an empty array without explicit accumulator', () => {
    const sum = (acc, n) => acc + n;
    expect(() => reduce([], sum)).toThrow(TypeError);
  });

  test('handles an empty object', () => {
    const sumValues = (acc, value) => acc + value;
    const result = reduce({}, sumValues, 0);
    expect(result).toBe(0);
  });

  test('throws an error if iteratee is not a function', () => {
    expect(() => reduce([1, 2, 3], null, 0)).toThrow(TypeError);
    expect(() => reduce([1, 2, 3], undefined)).toThrow(TypeError);
    expect(() => reduce([1, 2, 3], 'not a function')).toThrow(TypeError);
  });

  test('passes correct arguments to iteratee', () => {
    const iteratee = jest.fn((acc, value, index, collection) => acc + value);
    const array = [1, 2, 3];
    reduce(array, iteratee, 0);
    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(0, 1, 0, array);
    expect(iteratee).toHaveBeenCalledWith(1, 2, 1, array);
    expect(iteratee).toHaveBeenCalledWith(3, 3, 2, array);
  });

  test('does not mutate the original array', () => {
    const array = [1, 2, 3];
    const originalArray = [...array];
    reduce(array, (acc, n) => acc + n, 0);
    expect(array).toEqual(originalArray);
  });

  test('does not mutate the original object', () => {
    const obj = { a: 1, b: 2 };
    const originalObj = { ...obj };
    reduce(obj, (acc, value) => acc + value, 0);
    expect(obj).toEqual(originalObj);
  });
});