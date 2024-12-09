import words from '../src/words.js';

describe('words', () => {
  test('splits a string into words by default', () => {
    const input = 'fred, barney, & pebbles';
    const output = ['fred', 'barney', 'pebbles'];
    expect(words(input)).toEqual(output);
  });

  test('handles a string with only ASCII words', () => {
    const input = 'hello world123 test';
    const output = ['hello', 'world', '123', 'test'];
    expect(words(input)).toEqual(output);
  });

  test('splits words with a custom pattern', () => {
    const input = 'fred, barney, & pebbles';
    const pattern = /[^, ]+/g;
    const output = ['fred', 'barney', '&', 'pebbles'];
    expect(words(input, pattern)).toEqual(output);
  });

  test('handles Unicode words correctly', () => {
    const input = 'こんにちは 世界';
    const output = ['こんにちは', '世界'];
    expect(words(input)).toEqual(output);
  });

  test('returns an empty array for an empty string', () => {
    const input = '';
    const output = [];
    expect(words(input)).toEqual(output);
  });

  test('returns an empty array for strings with no matches', () => {
    const input = '.,!?';
    const output = [];
    expect(words(input)).toEqual(output);
  });

  test('handles numbers and mixed alphanumerics correctly', () => {
    const input = '123 456 test123';
    const output = ['123', '456', 'test', '123'];
    expect(words(input)).toEqual(output);
  });

  test('splits with a pattern matching only digits', () => {
    const input = 'fred123 barney456';
    const pattern = /\d+/g;
    const output = ['123', '456'];
    expect(words(input, pattern)).toEqual(output);
  });

  // Failed
  test('returns an empty array for null input', () => {
    const input = null;
    const output = [];
    expect(words(input)).toEqual(output);
  });

  test('handles strings with mixed case and special characters', () => {
    const input = 'ThisIsAString_with_MixedCase&123';
    const output = ['This', 'Is', 'A', 'String', 'with', 'Mixed', 'Case', '123'];
    expect(words(input)).toEqual(output);
  });
});