import map from '../src/map.js';

describe('map', () => {
  test('applies the iteratee function to each element', () => {
    const square = (n) => n * n;
    const array = [4, 8, 2];
    const result = map(array, square);
    expect(result).toEqual([16, 64, 4]);
  });

  test('passes index and array to iteratee', () => {
    const iteratee = jest.fn((value, index, array) => `${value}-${index}-${array.length}`);
    const array = [1, 2];
    const result = map(array, iteratee);
    expect(result).toEqual(['1-0-2', '2-1-2']);
    expect(iteratee).toHaveBeenCalledTimes(2);
    expect(iteratee).toHaveBeenCalledWith(1, 0, array);
    expect(iteratee).toHaveBeenCalledWith(2, 1, array);
  });

  test('returns an empty array when input is null or undefined', () => {
    expect(map(null, (x) => x)).toEqual([]);
    expect(map(undefined, (x) => x)).toEqual([]);
  });

  test('handles an empty array', () => {
    const iteratee = jest.fn();
    const result = map([], iteratee);
    expect(result).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });

  test('throws an error when iteratee is not a function', () => {
    expect(() => map([1, 2, 3], null)).toThrow(TypeError);
    expect(() => map([1, 2, 3], undefined)).toThrow(TypeError);
    expect(() => map([1, 2, 3], 'not a function')).toThrow(TypeError);
  });

  test('works with sparse arrays', () => {
    const array = [1, , 3];
    const iteratee = (value) => (value === undefined ? 'empty' : value * 2);
    const result = map(array, iteratee);
    expect(result).toEqual([2, 'empty', 6]);
  });

  test('does not mutate the original array', () => {
    const array = [1, 2, 3];
    const originalArray = [...array];
    map(array, (n) => n * 2);
    expect(array).toEqual(originalArray);
  });
});