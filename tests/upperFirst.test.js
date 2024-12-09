import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  // Testing input first letter lower case.
  test('converts first character of a lowercase string to uppercase', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  // Testing input all letters upper case.
  test('keeps the first character of an uppercase string uppercase', () => {
    expect(upperFirst('FRED')).toBe('FRED');
  });

  // Testing input empty string.
  test('handles an empty string', () => {
    expect(upperFirst('')).toBe('');
  });

  // Testing input single letter string.
  test('handles single-character strings', () => {
    expect(upperFirst('a')).toBe('A');
    expect(upperFirst('A')).toBe('A');
  });

  // Testing input that has space infront of the string.
  test('works with strings that contain spaces', () => {
    expect(upperFirst(' hello')).toBe(' hello');
    expect(upperFirst('hello world')).toBe('Hello world');
  });

  // Testing non-alphabetic first characters.
  test('handles non-alphabetic first characters', () => {
    expect(upperFirst('123abc')).toBe('123abc');
    expect(upperFirst('!hello')).toBe('!hello');
  });

  // Testing string with special characters.
  test('handles strings with special characters', () => {
    expect(upperFirst('ñandú')).toBe('Ñandú');
    expect(upperFirst('über')).toBe('Über');
  });

  // Testing inputs null and undefined.
  test('handles null or undefined input gracefully', () => {
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
  });
});