function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
  
    if (typeof a === 'object' && a !== null &&
        typeof b === 'object' && b !== null) {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
  
      if (keysA.length !== keysB.length) {
        return false;
      }

      for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
  
      return true;
    }
  
    return false;
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  const obj3 = { a: 1, b: 3 };
  
  console.log(deepEqual(obj1, obj2));
  console.log(deepEqual(obj1, obj3));