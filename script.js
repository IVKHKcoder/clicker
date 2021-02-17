let points = 0;
let houses = 0;
let market = 0;
let income = 0;
let time = 0;


function prss () {
points++;
console.log(points);
change('value', points);
}

function buyhouse () {
points -= 10;
houses++;
change('doma', houses);
}

let change = (id, product) => {
document.getElementById(id).innerHTML = product;
}

// let buyhous = () => {
// document.getElementById("doma").innerHTML = houses;
// }

// let bisnes = () => {
// document.getElementById("bussines").innerHTML = bussiness;
// }


function bussines () {
 houses -= 10;
 market++;
 change('bussines', market);
	console.log(income);
}


let timerId = setTimeout(function tick() {
points++;
change('value', points)
change('doma', houses)
	console.log(time)
  timerId = setTimeout(tick, 1000);
}, 1000)

