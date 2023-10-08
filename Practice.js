let x = [2, 3, 4, 6, 7, 9];

let arr = {
    name: "Daniel",
    age:99990,
    cohort: 17
}

let [a, b, ...rest] = x;
arr.rest = rest
console.log(arr);