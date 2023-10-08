function operations(leftOperand, rightOperand, operator) {
    let ans;

    if (operator === '+') {
        ans = leftOperand + rightOperand;
    } else if (operator === '-') {
        ans = leftOperand - rightOperand;
    } else if (operator === '*') {
        ans = leftOperand * rightOperand;
    } else if (operator === '/') {
        if (rightOperand !== 0) {
            ans = leftOperand / rightOperand;
        } else {
            ans = NaN;
        }
    } else {
        ans = NaN;
    }

    return ans;
}

const leftOperand = 10;
const rightOperand = 5;
const operator = '+';

const result = operations(leftOperand, rightOperand, operator);
console.log('Result:', result);