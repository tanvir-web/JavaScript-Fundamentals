function fruitProcessor(mango, orange){
	const mangoSlice = fruitSlicer(mango);
	const orangeSlice = fruitSlicer(orange);

	const juice = `We are making juice of mango (${mangoSlice}) and ornage (${orangeSlice})`;
	return juice;
}

function fruitSlicer(fruit){
	return (fruit * 4);
}

console.log(fruitProcessor(2, 4));
