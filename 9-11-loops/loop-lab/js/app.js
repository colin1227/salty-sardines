console.log("JS file is loaded");

let boolean= true;
let number = 7;
let string = "hello world";
console.log(string);
console.log(`${string}, fight the power`);

let fbool = false;
let num = 4;
let numb = "4";
num = 5;

console.log(num = numb," =");
console.log(num == numb," ==");
console.log(num === numb, " ===");


let someArray = [0, '1', 2, 4, '5', 6, '7', 8, '9', 10];
someArray.splice(3, 0, "3");

console.log("Please" + 'squeeze' + 'the' + 'cheese');
const word = 'belive'
console.log(`Please ${word} the cheese`);
num = 5;
numb = 10;
console.log(`the sum of ${num} and ${numb} is ${num  + numb}`)

console.log(someArray);

let r = 2;
let t = 3;


let empty = [];
for(m = 0; m < 100; m++){
	if(m % r === 0 && m % t === 0 ){
		empty.push("fizzbuz");
	}
	else if(m % t === 0){
		empty.push("fizz");
	}
	else if(m % r === 0) {
		empty.push("buzzz");
	}
	else{
		empty.push(m.toString());
	}
};
console.log(empty); 

/*let i = 1;

while(i < 101){
console.log(`i am ${i}`);
i++;
}*/

let y = 0;

while(y < 5001){
	console.log(`${y}'s square is ${y ** 2}`)
		y++;

}

let x = 1000;
while(x > 0){
	console.log(` i am ${x}`)
	x--;
}
let theNum = 0;
let w = 1
/*crashes the broweser, need work
while(theNum == 0){

	console.log(`ive run ${w} times`);
	w++;
if(w === Math.floor(Math.random()* 300)){

	theNum++;
}
}
*/
for(b = 800; b <= 900; b++){
	console.log(b)
}

console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.log("and they're always glad you came.");
console.log("You wanna be where you can see,");
console.log("our troubles are all the same");
console.log("You wanna be where, everybody knows");
console.log("Your name.");

/*
1 false
2 true
3 false
4 false 
5 true
6 false
7 true
8 false


= defines varibles

== compares values

=== compares type and value

*/

let irl = 1;

while(irl <= 1000){
console.log(`ginger chocolate honey patties, ${irl}, current loop number is: ${irl}`);
irl++;
}

for(let bo = 0; bo <= 100; bo++){
	console.log(bo);
}

for(let bov = 7; bov <= 635; bov++){
	console.log(bov);
}

let start = 0;
const limit = 100;
for(uh = start; uh <= limit;uh++){
	
	console.log(uh);
};

for(let yu = 1; yu <= 10;yu++){
	console.log(`you've done ${yu} reps`);
}










