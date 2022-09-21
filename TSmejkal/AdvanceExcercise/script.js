//Excercise 1
let a = 7;
let b = 14;
let c = parseInt("21");
let d = parseInt('36');
let e = 42;
let sumPlus = a+b+c+d+e;
console.log(sumPlus);

let f = parseInt('1');
let g = 15;
let h = 8;
let i = parseInt("1");
let sumMulti = f*g*h*i;
console.log(sumMulti);

let divide = sumPlus/sumMulti;
document.write(divide);

//Excercise 2
let people = ["Greg", "Mary", "Devon" ,"James"];
people.unshift("Matt"); //add front
people.pop(); //remove last item
people.push("Cherry"); //add end
console.log(people);

let copyPeople = people.slice();
copyPeople.shift(); //remove front item = Matt
copyPeople.splice(1,1);
console.log(copyPeople);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

console.log(people);
people.shift();
people.pop();
people.push("James")
console.log(people);

people.splice(2,1,"Elizabeth", "Anna");
console.log(people);

var withBob = people.concat("Bob");
console.log(withBob);

//Excercise 3

let multiArray = [  [1, 2, 1, 24], 
                    [8, 11, 9, 4], 
                    [7, 0, 7, 27], 
                    [7, 4, 28, 14], 
                    [3, 10, 25, 7], 
                    [21, 4, 6, 17], 
                    [3, 5, 26, 3] 
                ];

console.table(multiArray);
console.log(multiArray[1][1], multiArray[4][2], multiArray[5][3], multiArray[2][3], multiArray[2][1]);
