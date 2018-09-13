//easy going
for (let i = 1; i <= 20; i++) {
	console.log(i)
};
 
 //get even
for(let r = 0; r<= 200; r += 2){
	console.log(r)
}

//excited kitten


for(let y = 1; y <= 20; y++){
let rand = Math.floor(Math.random()* 3)
	if(y % 2 === 0 && rand === 0){
		console.log("...human...why you taking pictures of me?...")
		console.log("Love me, pet me! HSSSSSS!")

	}
	else if(y % 2 === 0 && rand === 1){
		console.log("...the catnip made me do it...")
		console.log("Love me, pet me! HSSSSSS!")
	}
	else if(y % 2 === 0 && rand === 2){
		console.log("...why does the red dot always get away...")
		console.log("Love me, pet me! HSSSSSS!")
	}
	else{
		console.log("Love me, pet me! HSSSSSS!")
	}
}

//Famous Fizz Buzz
 q = 3;
 p = 5;

 for (var u = 1; u <= 100; u++) {
 	if(u % q === 0 && u % p === 0){
 		console.log("Fizzbuzz");
 	}
 	else if(u % q === 0){
 		console.log("Fizz");
 	}
 	else if(u % p === 0){
 		console.log("Buzz");
 	}
 	else{
 		console.log(u);
 	}
 };


//Getting to Know You

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad.shift();
shahzad.unshift("Gameboy");

daniel[1]++;
ryan[2] = "Gotham City";
reuben.pop();
reuben.push("Chicago");
jim.pop();
jim.push("Houston", "Miami", "New York");
jim.splice(2, 1);

console.log(jim)

const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for(let t = 0; t <turtles.length; t++){
	turtles[t].toUpperCase();
}
//Return of the closets
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

thomsCloset[2].push("right shoe");

console.log(thomsCloset);
let thomsOutfit = [];
let kristynsOutfit = ["GA hoodie", "green pants"]

for(let r = 0; r <thomsCloset.length;r++){
  rando = Math.floor(Math.random()* thomsCloset[r].length);
  thomsOutfit.push(thomsCloset[r][rando]);
  
  }
  for(let ma = 0; ma < 1; ma++){
  	rando = Math.floor(Math.random()* kristynsCloset.length);
  	if(rando === 3 || rando === 4){
  	  console.log("already wearing that part")
  	  ma--;
  	}
  	else{
  		kristynsOutfit.push(kristynsCloset[rando])
  	}

  }
  //dont know how to get differnt out fits with out calling function
for(var ii = 0; ii < 3; ii++) {
console.log(`thoms outfit consist of a ${thomsOutfit[0]},
 ${thomsOutfit[1]} and ${thomsOutfit[2]}`)
console.log(`kristyns outfit cons of a ${kristynsOutfit[0]},
 ${kristynsOutfit[1]} and ${kristynsOutfit[2]}`)
};

for(let ia = 0; ia < kristynsCloset.length;ia++){
	console.log(`WHIRR: Now washing ${kristynsCloset[ia]}`)
}
for(let ai = 1; ai <= thomsCloset.length;ai++){
	console.log(ai)
}

let sum = 0;
let thr = 3;
let fv = 5;
for(let yy= 0; yy< 1000;yy++){
	
	if(yy % 3 === 0 || yy % 5 === 0){
		sum += yy
		console.log(`sum is now:${sum}`);
	}
	else{
		console.log(`sum is: ${sum}`);
	}
}

