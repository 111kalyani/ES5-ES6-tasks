const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];
// [32, 57, 22]

let getName = ({ name }) => name;

// Task 1
// Print the name list - As an array
// Expected Output
// ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]

console.log(scores.map(getName));
// console.log(scores.map(score => score.name));


// Task 2
// >=40 pass.. find those student that passed (Use array method)
// Expected Output
// [{
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//     {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   }]
// let result = scores.filter((element) => {
//   if(element.marks >=40){
//     return element.name;
//   }

// });
// console.log(result);

console.log(scores.filter(({ marks }) => marks >= 40));


// Task 3
//  Find all the names who failed the exams (Array methods)
// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];

console.log(scores.filter(({ marks }) => marks < 40).map(({ name }) => name));

// Task 4
// Find the Average marks
let sum = scores.reduce((sum, { marks }) => sum + marks, 0);
console.log((sum / scores.length).toFixed(2));

// Task 5
// Find the topper's name
// Expected Output
// "Debra Beard"

console.log(scores.filter(({ marks }) => marks > 90).map(({ name }) => name));


  // Only use
  // map, reduce, filter & destructuring

  // Task 6 - use es6
  // Build -  intersection, uniq, without, groupBy
  // https://lodash.com/docs/4.17.15#groupBy