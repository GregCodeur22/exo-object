let user = {
  lastName: "doe",
  firstName: "Damiane",
  age: 22,
};

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// let exist = user.hasOwnProperty("lastName");
// if (exist) {
//   console.log(user.lastName);
// }
const car = {
  type: "BMW",
  color: "blue",
  doors: 5,
  airConditioner: true,
};

let propertie = Object.keys(car);
console.log(propertie);

let value = Object.values(car);
console.log(value);
