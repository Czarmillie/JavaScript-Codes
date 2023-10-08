let arr = []

let row1 = []
let row2 = []
let row3 = []
var obj1 = {
    name: "Turkey",
    population: 10000,
    temp: 10,
    currency: "NG"
};

var obj2 = {
    name: "Ghana",
    population: 12000,
    temp: 12,
    currency: "DO"
};

var obj3 = {
    name: "Mali",
    population: 13000,
    temp: 23,
    currency: "GK"
};

row1.push(null);
row1.push(obj1);
row1.push(obj2);
row1.push(obj3);
arr.push(row1);

var obj4 = {
    name: "Chad",
    population: 14000,
    temp: -5,
    currency: "CB"
};

var obj5 = {
    name: "Egypt",
    population: 15000,
    temp: 18,
    currency: "SB"
};

var obj6 = {
    name: "Gambia",
    population: 16000,
    temp: 9,
    currency: "ST"
};

row2.push(obj4);
row2.push(obj5);
row2.push(obj6);
row2.push(null);
arr.push(row2);

var obj7 = {
    name: "Zambia",
    population: 17000,
    temp: 15,
    currency: "RB"
};

var obj8 = {
    name: "Zimbabwe",
    population: 18000,
    temp: 32,
    currency: "LB"
};

var obj9 = {
    name: "South Africa",
    population: 19000,
    temp: 20,
    currency: "MD"
};

row3.push(obj7);
row3.push(null);
row3.push(obj8);
row3.push(obj9);
arr.push(row3);

console.table(arr);

let totalPopulation = 0;

for (let idx = 0; idx < arr.length; idx++) {
  for (let adx = 0; adx < arr[idx].length; adx++) {
    let obj = arr[idx][adx];
    if (obj && obj.temp <= 10) {
      totalPopulation += obj.population;
    }
  }
}

console.log('Total population in regions with temperature <= 10°C:', totalPopulation);      