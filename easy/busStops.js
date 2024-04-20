var distanceBetweenBusStops = function (distance, start, destination) {
  if (start < destination) [start, destination] = [destination, start];

  let n = distance.length;
  let currStop = start;
  let traveledClockWise = 0;
  let traveledCounter = 0;

  // ? Would it be done with for/in iterators?

  while (currStop - n != destination) {
    if (currStop >= n) traveledClockWise += distance[currStop - n];
    else traveledClockWise += distance[currStop];
    currStop++;
  }

  currStop = start;

  while (currStop != destination) {
    traveledCounter += distance[currStop - 1];
    currStop--;
  }
  return traveledClockWise > traveledCounter ? traveledCounter : traveledClockWise;
};

distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2);
distanceBetweenBusStops([1, 2, 3, 4], 0, 3);
