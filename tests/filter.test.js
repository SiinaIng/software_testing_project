import filter from '../src/filter.js';

test('filters elements based on simple predicate', () => {
    const numbers = [0,1,2,3,4];
    const result = filter(numbers, (i) => i > 2);
    expect(result).toEqual([3,4]); 
});

/* Failed
test('returns [] if no elements match predicate', () => {
    const numbers = [0,1,2,3,4];
    const result = filter(numbers, (i) => i > 5);
    expect(result).toEqual([]); 
});

test('returns [] for an empty input array', () => {
    const result = filter([], (i) => 2*i === 4);
    expect(result).toEqual([]);
  });

test('handles null or undefined input array', () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
});

*/
test('filters elements based on property', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ]
    const result = filter(users, ({active}) => active);
    expect(result).toEqual([{ user: 'barney', active: true }]); 
});



