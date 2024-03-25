function checkSpeed(speed) {
  speed = parseInt(speed);
  if (speed < 70) {
    console.log("Ok");
  } else {
    let points = Math.floor((speed - 70) / 5);
    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${points}`);
    }
  }
}

checkSpeed(prompt("Enter your speed:"));