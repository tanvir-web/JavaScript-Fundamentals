'use strict';

const shop = {
  name: 'Alam Boi Ghor',
  addressOne: 'Gopal Krisno Toun Club',
  addressTwo: '8500, Pirojpur',
  categories: ['Book', 'Pen', 'Paper'],
  openingHours: {
    sat: {
      open: '08:00',
      close: '10:00'
    },
    sun: {
      open: '08:00',
      close: '10:00'
    }
  }
};

// Spread Operator
const arr = [7, 8, 9];
const newArr = [5, 6, ...arr];

console.log(newArr);

// Helps to get seperate value
console.log(...arr);

// Copy Array
const shopName = [...shop.categories];
console.log(shopName);

// Join 2 Array
const item = [...shop.categories, ...shop.categories];
console.log(item);
