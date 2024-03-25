function getStudentGrade() {
    let studentMark = prompt("Please enter student's mark (0-100):");
    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
      console.log("Invalid input! Please enter a mark between 0 and 100.");
      /*The getStudentGrade function prompts the user to enter a student's mark, between 0 and 100. 
      It then checks if the input is valid, and if so, determines the student's grade based on their mark.
      The isNaN function checks if a value is not a number. */
      return;
    }
    if (studentMark >= 80) {
      console.log("Grade: A");
    } else if (studentMark >= 60) {
      console.log("Grade: B");
    } else if (studentMark >= 50) {
      console.log("Grade: C");
    } else if (studentMark >= 40) {
      console.log("Grade: D");
    } else {
      console.log("Grade: E");
    }
  }
  
  // Test the function