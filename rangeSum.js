function range(start, end, step = 1) {
    const result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  function sum(numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
  
  const numbers = range(1, 10);
  console.log(numbers);
  
  const sumOfNumbers = sum(numbers);
  console.log(sumOfNumbers);
  
  const numbersWithStep = range(1, 10, 2);
  console.log(numbersWithStep);
  
  const numbersWithNegativeStep = range(5, 2, -1);
  console.log(numbersWithNegativeStep);
  