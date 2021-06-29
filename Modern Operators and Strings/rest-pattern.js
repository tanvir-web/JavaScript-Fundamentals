'use strict';

// Rest Operator (Store unused value in an array or object)
const [a, b, ...all] = [1, 2, 3, 4, 5, 6];
console.log(a, b, all);

// Order Pizza
const orderPizza = function(mainIng, ...othersIng){
  console.log(mainIng, othersIng);
}
orderPizza('Mashrooms', 'Onion', 'Olive', 'Spinach');
