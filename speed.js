//const prompt = require("prompt-sync")({ sigint: true });//

//checkSpeed(prompt("Enter your speed:"));

function checkSpeed(speed) {

  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // prompt the user to enter a driver's speed
  rl.question("Enter speed: ", (speed) => {
  
  // convert the speed parameter to an integer
  speed = parseInt(speed);

  //check the speed and print the result
  //set the speed limit to 70
  const speedLimit = 70;
  //if the speed is less than the speed limit, print "Ok"
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    //if the speed is greater than the speed limit, add one demerit point
    const margin = speed - speedLimit;
     //for every 5 km/s above the speed limit
    //Math.floor(margin / 5) calculates the 
    //integer quotient of the division of margin by 5.
    let points = Math.floor(margin / 5);
    if (points > 12) {
      console.log("License suspended");
    } else {
     //print the total number of demerit points.
      console.log(`Demerit Points: ${points}`);
    }

    rl.close();
  }});
}
 


checkSpeed();