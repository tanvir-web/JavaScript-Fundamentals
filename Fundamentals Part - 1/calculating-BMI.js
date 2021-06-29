/* 

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.



*/

//Challenge 1 & 2
const mm = 95;
const mh = 1.88;
const jm = 85;
const jh = 1.76;

const mBMI = mm / mh ** 2;
const jBMI = jm / jh ** 2;

console.log(mBMI, jBMI);

if(mBMI > jBMI){
	console.log(`Marks BMI (${mBMI}) is higher than Johns (${jBMI})`);
} else {
	console.log(`Johns BMI (${jBMI}) is higher than Marks (${mBMI})`);
};
