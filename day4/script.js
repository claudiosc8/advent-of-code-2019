const puzzle = '284639-748759'

const range = puzzle.split('-');

const NumToArray = (num) => num.toString().split('').map(Number);
const getlength = (num) => num.toString().length;

const conditionOne = (num) => {
	// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
	const array = NumToArray(num);
	let i = 0;
	while (i < array.length) {
	  if(array[i]>array[i+1]) { return false }
	  i++;
	}

	return true

}

const conditionTwo = (num) => {
	// Two adjacent digits are the same (like 22 in 122345).
	const array = NumToArray(num);
	
	let i = 0;
	while (i < array.length) {
	  if(array[i] === array[i-1]) { return true }
	  i++;
	}
	return false
}

const conditionThree = (num) => {

	const array = NumToArray(num);

	let i = 0;
	while (i < array.length) {
	  if(array[i] === array[i+1] && array[i] != array[i+2] && array[i] !== array[i-1]) { return true }
	  i++;
	}
	return false

}

const part1 = (input) => {

	const passwords = [];

	for (let i=input[0]; i<input[1]; i++ ) {
		if(conditionOne(i) && conditionTwo(i) && getlength(i) === 6) {
			passwords.push(i)
		}
	}

	return passwords.length

}

const part2 = (input) => {

	const passwords = [];

	for (let i=input[0]; i<input[1]; i++ ) {
		if(conditionOne(i) && conditionTwo(i) && conditionThree(i) && getlength(i) === 6) {
			passwords.push(i)
		}
	}

	return passwords.length

}




// console.log( getOccurrence([1,2,2,4,4,4]) )


// console.log(part1(puzzle))

console.log( part1(range), part2(range) )