const persons = [
  { name: "Marie", age: 14, gender: "f" },
  { name: "Tim", age: 15, gender: "m" },
  { name: "Max", age: 15, gender: "m" },
  { name: "Lena", age: 13, gender: "f" },
  { name: "Niki", age: 16, gender: "m" }
];

persons.sort((a, b) => a.age - b.age);

console.log("Nach Alter sortiert:");
console.log(persons);

const males = persons.filter(person => person.gender === "m");
const females = persons.filter(person => person.gender === "f");

console.log("Männliche Personen:");
console.log(males);

console.log("Weibliche Personen:");
console.log(females);