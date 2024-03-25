function getStudentGrade() {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // prompt the user to enter a student's mark
  rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
    // convert the user input to an integer 
    const studentMark = parseInt(mark);

    // check if the user input is a valid mark (between 0 and 100)
    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
      console.log("Please enter a mark between 0 and 100.");
      // if the user input is not valid, end the function
      return;
    }

    // determine the student's grade based on their mark
    if (studentMark >= 80) {
      console.log("Grade: A");
    } else if (studentMark >= 60) {
      console.log("Grade: B");
    } else if (studentMark >= 50) {
      90
      console.log("Grade: C");
    } else if (studentMark >= 40) {
      console.log("Grade: D");
    } else {
      console.log("Grade: E");
    }

    // close the readline interface
    rl.close();
  });
}


getStudentGrade();