import capitalize from '../src/capitalize.js';
import words from '../src/words.js';

describe('Integration test: capitalize and words', () => {
  test('splits a sentence into words and capitalizes each word', () => {
    const input = 'hello world! this is a test.';
    const expectedOutput = ['Hello', 'World', 'This', 'Is', 'A', 'Test'];
    
    // Split into words
    const wordArray = words(input);
    
    // Capitalize each word
    const capitalizedWords = wordArray.map(word => capitalize(word));
    
    expect(capitalizedWords).toEqual(expectedOutput);
  });

  test('handles a string with special characters', () => {
    const input = 'java_is awesome!';
    const expectedOutput = ['Java', 'Is', 'Awesome'];
    
    // Split into words
    const wordArray = words(input);
    
    // Capitalize each word
    const capitalizedWords = wordArray.map(word => capitalize(word));
    
    expect(capitalizedWords).toEqual(expectedOutput);
  });

  test('returns an empty array for an empty string', () => {
    const input = '';
    const expectedOutput = [];
    
    // Split into words
    const wordArray = words(input);
    
    // Capitalize each word
    const capitalizedWords = wordArray.map(word => capitalize(word));
    
    expect(capitalizedWords).toEqual(expectedOutput);
  });
});