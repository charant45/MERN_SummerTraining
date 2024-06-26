// const student = {
//     name: "John",
//     age: 20,
//     marks: 80,
//     address: {
//         city: "London",
//         country: "UK"
//     }
// }

// console.log(student.name);

// const {name} = student;  Destructuring is useful when you want to extract multiple properties from an object into separate variables.
// console.log(name);

// const fruits = ['Banana', 'Apple', 'Orange'];

// console.log(fruits[0]);

// const [i1 , i2] = fruits;

// console.log(i1,i2);

// const student = {
//     name: "John",
//     age: 20,
//     marks: 80,
//     hobbies: ['Painting','Styling','Drawing'],
// }

// const {hobbies} = student;

// hobbies[0] = 'Studying';

// console.log(hobbies);
// console.log(student);

// rest ---> to pack the values
// spread ---> to unpack the values


const s1 = {
    name: "John",
    age: 20,
    marks: 80,
    hobbies: ['Painting','Styling','Drawing'],
}

// const s2 = s1;
const s2 = {...s1}; // ... is used for unpack the values
s2.name = 'Ajay';

console.log(s1);
console.log(s2);