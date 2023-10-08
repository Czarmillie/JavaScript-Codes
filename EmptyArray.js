let empty = [];

empty.push(["Car", 2000]);
empty.push(["Truck", 500]);
empty.push(["Bike", 6500]);
empty.push(["Scooter", 1500])

empty[0].push(["Toyota", "Nissan"])
empty[1].push(["Ford"])
empty[2].push(["Honda"])

console.table(empty)