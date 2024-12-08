import isObjectLike from '../src/isObjectLike.js';

test('returns true for plain objects', () => {
    expect(isObjectLike({})).toBe(true);
  });

test('returns true for arrays', () => {
expect(isObjectLike([1, 2, 3])).toBe(true);
});

test('returns false for functions', () => {
    expect(isObjectLike(function() {})).toBe(false);
    expect(isObjectLike(() => {})).toBe(false);
  });

test('returns false for null', () => {
    expect(isObjectLike(null)).toBe(false);
});

test('returns false for primitives', () => {
    expect(isObjectLike(42)).toBe(false);
    expect(isObjectLike('string')).toBe(false);
    expect(isObjectLike(true)).toBe(false);
    expect(isObjectLike(Symbol('symbol'))).toBe(false);
    expect(isObjectLike(undefined)).toBe(false)
  });

