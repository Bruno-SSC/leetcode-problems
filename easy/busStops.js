var distanceBetweenBusStops = function (distance, start, destination) {
  let n = distance.length;
  let clockwise = 0,
    counterClock = 0;

  let path = [];
  let fill = 0;
  for (let c = 0; c < n * 2; c++) {
    if (fill > n - 1) fill = 0;
    path.push(fill);
    fill++;
  }

  let countingClock = false;
  let countingCounter = false;

  for (let i = 0; i < path.length; i++) {
    let val = path[i];

    if (val === start) {
      countingClock = true;
    }

    if (countingClock && val === destination) {
      countingClock = false;
      break;
    }
    if (countingClock) clockwise += distance[val];
  }

  for (let i = 0; i < path.length; i++) {
    let val = path[i];
    if (val === destination) {
      countingCounter = true;
    }

    if (countingCounter && val === start) {
      countingClock = false;
      break;
    }
    if (countingCounter) counterClock += distance[val];
  }

  let shortest = clockwise > counterClock ? counterClock : clockwise;

  return shortest;
};

console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2));
console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 2, 7));

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2));
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3));
