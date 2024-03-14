// Code your solution in this file!
function distanceFromHqInBlocks(start) {
  //returns the number of blocks given a value
  return Math.abs(start - 42);
}

function distanceFromHqInFeet(start) {
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  const blocksFromStart = distanceFromHqInBlocks(start);
  const feetFromStart = blocksFromStart * 264;
  return feetFromStart;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }

  return farePrice;
}
