const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter Salary: ", (basicSalary) => {
  // Declare the constants for the deductions.
  const TAX_LIMIT = 24000;
  const TAX_RATE = 0.1;
  const NHIF_BASE = 5000;
  const NHIF_RATE = 0.05;
  const NSSF_RATE = 0.06;

  // Create a function to calculate the the netSalary salary
  let grossSalary = basicSalary;

  // Calculate tax
  let tax = 0;
  if (grossSalary > TAX_LIMIT) {
    tax = (grossSalary - TAX_LIMIT) * TAX_RATE;
  } 

  // Calculate NHIF deductions
  let nhifDeduction = 0;
  if (grossSalary <= NHIF_BASE) {
    nhifDeduction = NHIF_BASE * NHIF_RATE;
  } else {
    nhifDeduction = grossSalary * NHIF_RATE;
  }

  // Calculate NSSF deductions
  let nssfDeduction = grossSalary * NSSF_RATE;

  // Calculate net salary
  let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

  // Print the results for each function's results.
  console.log("Gross salary:", grossSalary);
  console.log("Tax:", tax);
  console.log("NHIF deduction:", nhifDeduction);
  console.log("NSSF deduction:", nssfDeduction);
  console.log("Net salary:", netSalary);

  rl.close();
});