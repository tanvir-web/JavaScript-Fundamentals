/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks.
*/


const dolphinsScore = (96 + 108 + 89) / 3;
const koalaScore = (88 + 91 + 110) / 3;

console.log(dolphinsScore, koalaScore);

if(dolphinsScore > koalaScore){
	console.log(`Dolphins team is the winner, their score: ${dolphinsScore}`);
} else if(koalaScore > dolphinsScore){
	console.log(`Koalas team is the winner, their score: ${koalaScore}`);
} else{
	console.log("This game is Draw!");
};

	//Bonus 1
const dolphinsScore = (97 + 112 + 101) / 3;
const koalaScore = (109 + 95 + 123) / 3;

console.log(dolphinsScore, koalaScore);

if(dolphinsScore >= 100 && dolphinsScore > koalaScore){
	console.log("Dolphins team is the winner!");
} else if(koalaScore >= 100 && koalaScore > dolphinsScore){
	console.log("Koalas team is the winner!");
} else if(dolphinsScore === koalaScore){
	console.log("This game is draw!");
} else{
	console.log("Both team are descqualified!");
};
