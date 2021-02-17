let points = 0;
let houses = 0;
let income = 0;

function prss () {
points++;
console.log(points);
change();
}

function buyhouse () {
points -= 10;
houses++;
change();
buyhous();
}

let change = () => {
document.getElementById("value").innerHTML = points;
}

let buyhous = () => {
document.getElementById("doma").innerHTML = houses;
}

let timerId = setTimeout(function tick() {
  points++;
  change();
  timerId = setTimeout(tick, 2000);
}, 2000)

