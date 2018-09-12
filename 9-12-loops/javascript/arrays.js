/*
let the = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let het = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < the.length; i++) {
	if(the[i] === het[i]){
		console.log("match! " + the[i] + " =")
	}
	else if(the[i] > het[i]){
		console.log( the[i] + " is greater than  " + [i] + " >")

	}
	else if(the[i] < het[i]){
		console.log( the[i] + " is less than " + het[i] + " <")

	}
}

the.forEach(function(m){
	m + 2
	console.log(m)
});

let array = [];
let favFoods = ["lobster", "jelly beans", "rotiserie chicken"];
console.log(favFoods);

const ghostBusters1984 = ["Venkman", "Spengler", "Stantz",
                        "Zeddemore", "Melnitz", "Barrett", "Tully"];

console.log(ghostBusters1984[0]);
console.log(ghostBusters1984[2]);
console.log(ghostBusters1984.length);

const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch",
              "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

for (var i = 0; i < drSeuss.length; i++) {
 console.log(drSeuss[i])

}

for (var i = 0; i < drSeuss.length; i++) {
   if( i % 2 !== 0){
   	console.log(drSeuss[i])
   }
}

for (var i = 0; i < drSeuss.length; i++) {
    if( i % 2 !== 0){
   	console.log([i])
   	console.log(drSeuss[i])
   }

}

const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
                        "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];


for (var i = 0; i < looneyTunesChars.length; i++) {
   if( i % 2 === 0){
   	console.log(looneyTunesChars[i])
}
}
for (var i = 0; i < looneyTunesChars.length; i+= 2) {
	if(i % 2 === 0 || [i] === 3){
	console.log(looneyTunesChars[i])
}
}
for (var i = 0; i < looneyTunesChars.length; i++) {
    if( i % 2 !== 0){
   	console.log(looneyTunesChars[i])
   }
}

*/
const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];

for(let p = 1; p < presidents.length; p+= 2){
  console.log(presidents[p]);
}

const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];

 let empty = [];

for(let v = 0; v < menu.length; v++){
  if(menu[v].glutenFree === true){
    empty.push(menu[v]);
  }
}
const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]
let emp = [];

for(let h = 0; h < mixedArray.length; h++){
  if(mixedArray[h] != NaN){
    console.log(mixedArray[h]);
  }
}

const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, 
{name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, 
{name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}]
const goats = [];
for(let x = 0; x < league.length; x++){
  for(let z = 0; z < league[x].players.length; z++){
    if(league[x].players[z].goat === true){
          goats.push(league[x].players[z].name);

  }
    }
}
console.log(goats);


