/* Function Constructor */

/* 'updating object values', update properties, change values use the same syntax: Objectname property and assign a new value to it  */


function Fruit (type) {
    this.type = type;

}

let fruit = new Fruit ("banana");
console.log (`Although I am ${fruit.type} I can still talk!`);

/* Object Constructor */
/* uncomment me, and see the banana talk!! 
let fruit = new Object();
fruit.type = "banana";
console.log (`Although I am ${fruit.type} I can still talk!`);

*/

/* The 'object constructor' method in the above example is the 3rd way to create an object */