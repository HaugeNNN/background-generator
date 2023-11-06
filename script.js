/*
let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch',
}

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value => {
	return value [1] + value [0].replace('username', '');
})


turtle.padStart(8)
rabbit.padStart(8)

console.log(startLine);
console.log(turtle);
console.log(rabbit);

const array = [1,2,3,4,5]
array.flat()

const array2 = [1,[2,3],[4,5]]
array2.flat()

const array3 = [1,2,[3,4,[5]]]
array3.flat(2)

const entries = ['bob', 'sally',,,,,,'cindy']
entries.flat()

const userEmail = '     eddytheeagle@gmail.com'
const userEmail2 = 'jonnyddangorud@hmail.com            '

console.log(userEmail.trimstart())
console.log(userEmail2.trimend())*/

userProfiles = [['commanderTom', 23], ['derekZlander', 40] ['hansel', 18]];

try {
	Object.fromEntries(userProfiles)}
	catch (error){
		console.log('fuck you' + error)
	}

const basket = ['apples', 'oranges', 'grapes'];
const indetailbasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000,
}

for ( let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

basket.forEach(item => {
	console.log(item);
})

for (item of basket){
	console.log(item);
}

for (item in indetailbasket){
	console.log(item);
}

let will_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.40,
		weight: 6,
	}
}

let andrei_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
		power: 'lightning'
	}
}


let power = andrei_pokemon?.pikachu?.power ?? 'no power'
console.log(power)

const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
console.log('array', array);
    debugger;
    return accumulator.concat(array)
}, []); 



console.log('1');
setTimeout(()=> {
	console.log('2');
}, 2000)
console.log('3');