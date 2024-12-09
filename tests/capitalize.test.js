import capitalize from '../src/capitalize';

describe('capitalize', () => {

  // Test tries normal case that all letters are lower case.
  test('should capitalize the first letter of the string', () => {
    const result = capitalize('hello');
    expect(result).toBe('Hello');
  });

  // Test tries to send empty string.
  test('should return an empty string when input is empty', () => {
    const result = capitalize('');
    expect(result).toBe('');
  });

  // Test tries to send all all letters in upper case.
  test('should capitalize the first letter of an all-uppercase string', () => {
    const result = capitalize('HELLO');
    expect(result).toBe('Hello');
  });

  // Test tries to send already correct input
  test('should return the same string if it is already capitalized', () => {
    const result = capitalize('Hello');
    expect(result).toBe('Hello');
  });

  // Test tries to send lower and upper cases in random order.
  test('should lowercase the remaining letters', () => {
    const result = capitalize('hElLo');
    expect(result).toBe('Hello');
  });
});