console.log(Math.random());
console.log(Math.floor(Math.random()*5));

var students = ["John" , "Drin"];

var [s1 , s2] = students;

console.log(s1);
console.log(s2);

var places = ['Prishtina', 'Gilani', 'Peja'];
 
var [ firstplace , , secondplace] = places;

console.log(firstplace);
console.log(secondplace);

var number = [1,2,3,4,5,6,7];
var [first, second, ...othernumbers] = number;

console.log(first);
console.log(second);
console.log(othernumbers.toString());