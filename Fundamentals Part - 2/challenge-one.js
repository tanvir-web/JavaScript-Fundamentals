/*

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time

Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

*/


'use strict';

// Challege 1
const calcAverage = average => average / 3;

function checkWinner(avgDolphins, avgKoalas){
	if(avgDolphins >= avgKoalas * 2){
		return (`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
	} else if(avgKoalas >= avgDolphins * 2){
		return (`Koalas win (${avgDolphins} vs ${avgKoalas}).`);
	} else{
		return (`No one is the winner!`);
	}
}

// Test 1
const dolphinsScore = calcAverage(44 + 23 + 71);
const koalasScore = calcAverage(65 + 54 + 49);

// Test 2
const dolphinsScore2 = calcAverage(85 + 54 + 41);
const koalasScore2 = calcAverage(23 + 34 + 27);

const game1 = checkWinner(dolphinsScore, koalasScore);
const game2 = checkWinner(dolphinsScore2, koalasScore2);

// Score
console.log(`Score Bord: ${dolphinsScore} vs ${koalasScore} and ${dolphinsScore2} vs ${koalasScore2}`)
console.log(`Game 1: ${game1}`);
console.log(`Game 2: ${game2}`);
