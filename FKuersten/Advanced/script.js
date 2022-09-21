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

var people2 = new Array();
people2 = people.split('Mary Matt');
console.log(people2);