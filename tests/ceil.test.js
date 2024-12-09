import ceil from '../src/ceil.js';

describe('ceil', () => {
  // Testing round up to nearest integer.
  test('rounds up to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(-4.006)).toBe(-4);
  });

  // Testing round up to specified precision.
  test('rounds up to a specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(-6.004, 2)).toBe(-6);
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(123.456, 1)).toBe(123.5);
    expect(ceil(123.456, -1)).toBe(130);
  });

  // Testing to handle input 0 to precision.
  test('handles zero precision', () => {
    expect(ceil(4.5, 0)).toBe(5);
    expect(ceil(-4.5, 0)).toBe(-4);
  });

  // Testing to handle edge cases.
  test('handles edge cases', () => {
    expect(ceil(0)).toBe(0);
    expect(ceil(-0)).toBe(-0);
    expect(ceil(Infinity)).toBe(Infinity);
    expect(ceil(-Infinity)).toBe(-Infinity);
    expect(ceil(NaN)).toBeNaN();
  });

  // Failed
  // Testing to handle invalid or missing precision.
  test('handles invalid or missing precision', () => {
    expect(ceil(5.678, undefined)).toBe(6); // undefined precision
    expect(() => ceil(5.678, 'a')).toThrow(); //invalid precision
  });
});