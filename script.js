/*Instanciez un objet car de manière littérale, qui aurait comme propriétés : 'type', 'color', 'doors', 'airConditioner'.
L'attribut type est de type string ; color est de type string ; doors de type number ; et airConditioner de type boolean.
Les valeurs de chaque propriété doivent respecter les types.*/

let obj = {
  type: "string",
  color: "string",
  doors: 1,
  airConditioner: true,
};
// console.log(obj);

const car = {
  type: "BMW",
  color: "bleu",
  doors: 5,
  airConditioner: true,
};

for (let obj1 in car) {
  console.log(`${obj1} : ${car[obj1]}`);
}
