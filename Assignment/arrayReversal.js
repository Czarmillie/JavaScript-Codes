function reverseArray(arr) {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  
  function reverseArrayInPlace(arr) {
    const len = arr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      const temp = arr[i];
      arr[i] = arr[len - 1 - i];
      arr[len - 1 - i] = temp;
    }
  }
  
  const arr1 = [1, 2, 3, 4, 5];
  const reversedArr1 = reverseArray(arr1);
  console.log(reversedArr1);
  
  const arr2 = [6, 7, 8, 9, 10];
  reverseArrayInPlace(arr2);
  console.log(arr2);
  