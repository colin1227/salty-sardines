for (var i = 50; i > 19; i--) {
 if(i % 3 === 0){
 	console.log(i)
 }
}
/*
while (2 === 2){
	console.log("still running")
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
}