//Excercise 1
const cars = ["Tesla", "Audi", "Renault", "Volvo", "Mzada", "Fiat", "Ferrari"];
console.log(cars.sort());

//Excercise 2

let fruits = ["apple", "banana", "kiwi"];
fruits.push("orange");
console.log(fruits);

document.write(fruits.join(', ') + "<br>");
document.write(fruits[0]+ ", " + fruits[1]+ ", " + fruits[2] + "<br>");

let animals = ["monkey", "hourse", "dog"];
animals.sort()
document.write(animals.join(', ') + "<br>");
animals.unshift("cat");
document.write(animals.join(', ') + "<br>");

//Excercise 3
var fruit = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
document.write(fruit.split("/").join("<br>"));

