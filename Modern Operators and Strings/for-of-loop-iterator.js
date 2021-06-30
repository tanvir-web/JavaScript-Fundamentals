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

// Creating single array
const menu = [...resturant.starterMenu, ...resturant.mainMenu];
console.log(menu);

// For Of loop
for(const item of menu) console.log(item);

// For Of with entries
for(const [item, element] of menu.entries()){
  console.log(`${item + 1} : ${element}`);
}

// Entries function crates an array for indivisual item with serial and element
// Regular array: ['Spring Rolls', 'Onion Soup']
// Iterator array: [0, 'Spring Rolls'], [1, 'Onion Soup']
console.log(...menu.entries());

