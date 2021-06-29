'use strict';
const shop = {
  name: 'Alam Boi Ghor',
  address: 'Gopal Krisno Toun Club',
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

// Destructing Objects
const {name, openingHours} = shop;
console.log(name, openingHours);

// Giving Name
// const {name: shopName, openingHours: hours} = shop;
// console.log(shopName, hours);

// Default / Empty Values ( = [] )
const {name: shopName = [], openingHours: hours = [], emailAddress: email = [], contactNo: contact = []} = shop;
console.log(shopName, hours, email, contact);

// Mutating Variables
({name: a, address: b} = shop);
console.log(a,b);

// Nested Destructing
const {openingHours: {sat: {open, close}}} = shop;
console.log(open, close);
