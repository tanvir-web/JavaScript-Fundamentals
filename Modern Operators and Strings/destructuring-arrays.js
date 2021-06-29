const shop = {
  name: 'Alam Boi Ghor',
  address: 'Gopal Krisno Toun Club',
  categories: ['Book', 'Pen', 'Paper'],
};

// Destructing Arrays
let [one, two] = shop.categories;
console.log(one,two);

// Switching Variables
[one, two] = [two, one];
console.log(one, two);

// Nested Destructing
const nested = [2, 5, [7, 9]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Valus (c, d has default valus)
const [a = 1, b = 1, c = 1, d = 1] = [3, 6];
console.log(a, b, c, d);
