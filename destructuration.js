let myArray = [1, 2, 3, 4, 5, 6];

let myNumber = myArray.slice(1, 2);
// console.log(myNumber); // 2

myArray = myArray.slice(-2);
// console.log(myArray); // [5,6]

myArray = [...myNumber, myArray];
// console.log(myArray); // [2,5,6]

const car = {
  type: "BMW",
  color: "blue",
  doors: 3,
  airConditioner: true,
};

const properties = Object.keys(car);

console.log(properties);
