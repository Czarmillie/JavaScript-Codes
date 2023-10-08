function ListNode(value, next = null) {
    this.value = value;
    this.next = next;
  }
  
  function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = prepend(arr[i], list);
    }
    return list;
  }
  
  function listToArray(list) {
    const arr = [];
    let current = list;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  
  function prepend(value, rest) {
    return new ListNode(value, rest);
  }
  
  function nth(list, index) {
    if (list === null) {
      return undefined;
    } else if (index === 0) {
      return list.value;
    } else {
      return nth(list.next, index - 1);
    }
  }
  
  const arr = [10, 20, 30];
  const list = arrayToList(arr);
  console.log(listToArray(list));
  
  const modifiedList = prepend(5, list);
  console.log(listToArray(modifiedList));
  
  console.log(nth(list, 1));
  console.log(nth(list, 5));
  
  function nthRecursive(list, index) {
    if (list === null) {
      return undefined;
    } else if (index === 0) {
      return list.value;
    } else {
      return nthRecursive(list.next, index - 1);
    }
  }
  
  console.log(nthRecursive(list, 1));
  console.log(nthRecursive(list, 5));  