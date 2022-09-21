/* Exercise 1 Start */
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;
let f = '1';
let g = 15;
let h = 8;
let i = "1";

var addition = (a + b + Number(c) + Number(d) + e);
console.log(addition);

var multiply = (Number(f) * g * h * Number(i));
console.log(multiply);

document.write(addition/multiply);
/* Exercise 1 End */

/* Exercise 2 Start */
let people = ["Greg" , "Mary" , "Devon" , "James"];
people.splice(0,1); /* Removes Greg */
console.log(people);
/* ['Mary', 'Devon', 'James'] */

people.splice(0,0, "Matt"); /* Add Matt */
console.log(people);
/* ['Matt', 'Mary', 'Devon', 'James'] */

people.splice(3,1);
console.log(people);
/* ['Matt', 'Mary', 'Devon'] */

people.splice(3,0, "Flo");
console.log(people);
/* ['Matt', 'Mary', 'Devon', 'Flo'] */

let newArr = people.slice(2)
console.log(newArr);
/* Make a copy of the array using slice. The copy should NOT include "Mary" or "Matt". */

let result = people.indexOf("Mary");
console.log(result);
/* result 1 */
/* Using the indexOf method, find the index of where "Mary" is located. */

let result2 = people.indexOf("Foo");
console.log(result2);
/* result -1 */
/* Using the indexOf method, find the index of where "Foo" is located (this should return -1). */

let people3 = ["Greg" , "Mary" , "Devon" , "James"];
people3.splice(2,1 ,"Elizabeth" , "Anna");
console.log(people3);

/* Exercise 2 End */

/* Exercise 3 Start */

let nrarray = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(nrarray[1][1] , nrarray[4][2], nrarray[5][3], nrarray[2][3] , nrarray[2][1]);
/* Select and output the numbers 11, 25, 17, 27 and 0 in the console. */

/* Exercise 3 End */