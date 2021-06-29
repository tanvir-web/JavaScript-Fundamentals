'use strict';

const resturant = {
  name: 'La De Reve',
  address: 'Queen Street, Auckland, New Zealand',
  starterMenu: ['Spring Rolls', 'Onion Soup', 'Bruschetta', 'Caesar Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Grilled Salmon', 'Beef Stake'],
  openingHour: {
    sat: {
      open: '10:00',
      close: '22:00'
    },
    sun: {
      open: '08:00',
      close: '20:00'
    }
  },

  orderProcess: function(item1, item2){
  console.log(`Your order ${this.starterMenu[item1 - 1]} and ${this.mainMenu[item2 - 1]} are confirmed. Thanks to order ${this.name}.`);
  },

  extraItem: function(...item3){
    console.log(`Extra item added ${item3}`);
  }
};

console.log('--- OR ---');
// OR operator can use any data type, ruturn any data type
// Short circuiting: When OR operator got first true value it will execute the result

console.log(3 || 'Martha');
console.log('Martha' || 3);
console.log(undefined || null);

// Using OR operator
// We set a default value for number of guest, if in this array no number of guest found we exicute default value
resturant.numGuest = 0;
const guest1 = resturant.numGuest || 10;
console.log(guest1);

console.log('--- AND ---');
// AND operator can be true or false (true && true && false = False, true && true && true = true)
// If all values are true it will execute last value
// If any value is false it will execute first falsy value

console.log('Hello' && 23 && null && 'Martha');
console.log('Hello' && 23 && 'Jonas' && 'Martha');


console.log('--- Nullish Coalescing Operator (ES2020) ---');
// Nullish: Null and undefined (Not 0 or ' ')
// Work as a OR operator

const guest2 = resturant.numGuest ?? 10;
console.log(guest2);
