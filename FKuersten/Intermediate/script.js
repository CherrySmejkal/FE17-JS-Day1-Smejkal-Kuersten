/* Exercise 1 */
var cars = ["Tesla", "Audi", "Renault" , "Volvo" , "Mazda", "Ferrari", "Fiat"];
cars.sort();
console.log(cars);
/* Exercise 2.1 */
var fruits = [" apple"," banana"," kiwi"];
console.log(fruits[0] + fruits[1] + fruits[2] + " orange");
console.log(fruits[0] + fruits[1] + fruits[2]);
/* Exercise 2.2 */
var animals = [" monkey" , " horse" , " dog"];
console.log(animals[2] , animals[1] , animals[0]);
console.log("cat" + animals[2] , animals[1] , animals[0]);
/* Exercise 3 */
let fruit_names = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = fruit_names.split('/');
console.log(temp);
