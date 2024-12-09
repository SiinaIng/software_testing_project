import isEmpty from '../src/isEmpty';

describe('isEmpty', () => {
	
  // Testing input null to return true.
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })

  // Testing input undefined to return true.
  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  // Testing input true to return true.
  test('should return true for boolean true', () => {
    expect(isEmpty(true)).toBe(true)
  })

  // Testing input false to return true.
  test('should return true for boolean false', () => {
    expect(isEmpty(false)).toBe(true)
  })

  // Testing input number 0 to return true.
  test('should return true for number 0', () => {
    expect(isEmpty(0)).toBe(true)
  })

  // Testing input NaN to return true.
  test('should return true for number NaN', () => {
    expect(isEmpty(NaN)).toBe(true)
  })

  // Testing input empty string to return true.
  test('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true)
  })

  // Testing input string to return false.
  test('should return false for non-empty string', () => {
    expect(isEmpty('hello')).toBe(false)
  })

  // Testing empty array to return true.
  test('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  // Testing non-empty array to return false.
  test('should return false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  // Testing empty object to return true.
  test('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true)
  })

  // Testing non-empty object to return false.
  test('should return false for object with properties', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  // Testing empty map to return true.
  test('should return true for empty Map', () => {
    expect(isEmpty(new Map())).toBe(true)
  })

  // Testing non-empty map to return false.
  test('should return false for non-empty Map', () => {
    const map = new Map()
    map.set('key', 'value')
    expect(isEmpty(map)).toBe(false)
  })

  // Testing empty set to return true.
  test('should return true for empty Set', () => {
    expect(isEmpty(new Set())).toBe(true)
  })

  // Testing non-empty set to return false.
  test('should return false for non-empty Set', () => {
    const set = new Set()
    set.add('value')
    expect(isEmpty(set)).toBe(false)
  })

  // Testing empty arguments object to return true.
  test('should return true for empty arguments object', () => {
    function testFn() {
      expect(isEmpty(arguments)).toBe(true)
    }
    testFn()
  })

  // Testing non-empty arguments object to return false.
  test('should return false for non-empty arguments object', () => {
    function testFn(a) {
      expect(isEmpty(arguments)).toBe(false)
    }
    testFn(1)
  })

  // Testing empty buffer for return true.
  test('should return true for buffer', () => {
    const buffer = Buffer.from('')
    expect(isEmpty(buffer)).toBe(true)
  })

  // Testing non-empty buffer for return false.
  test('should return false for non-empty buffer', () => {
    const buffer = Buffer.from('hello')
    expect(isEmpty(buffer)).toBe(false)
  })

  // Testing empty string to return true.
  test('should return true for empty string object', () => {
    const strObj = new String('')
    expect(isEmpty(strObj)).toBe(true)
  })

  // Testing non-empty string to return false.
  test('should return false for non-empty string object', () => {
    const strObj = new String('hello')
    expect(isEmpty(strObj)).toBe(false)
  })
  
  // Testing empty prototype to return true.
  test('should return true for an empty prototype object', () => {
    function MyConstructor() {}
    const protoObj = new MyConstructor();
    expect(isEmpty(protoObj)).toBe(true);
  });

  // Testing non-empty prototype to return false.
  test('should return false for a non-empty prototype object', () => {
    function MyConstructor() {}
    const protoObj = new MyConstructor();
    protoObj.someProperty = 'value';
    expect(isEmpty(protoObj)).toBe(false);
  });
  
  // Testing empty object without prototype to return true.
  test('should return true for a regular empty object', () => {
    const obj = {};
    expect(isEmpty(obj)).toBe(true);
  });

  // Testing object with keys to return false.
  test('should return false for a non-empty regular object', () => {
    const obj = { key: 'value' };
    expect(isEmpty(obj)).toBe(false);
  });
})