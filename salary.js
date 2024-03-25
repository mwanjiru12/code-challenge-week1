function calculateNetSalary(basicSalary, benefits) {
    // Constants
    const TAX_THRESHOLD = 24000;
    const TAX_RATE = 0.1;
    const NHIF_BASE = 5000;
    const NHIF_RATE = 0.05;
    const NSSF_RATE = 0.06;
  
    // Calculate gross salary
    let grossSalary = basicSalary + benefits;
  
    // Calculate tax
    let tax = 0;
    if (grossSalary > TAX_THRESHOLD) {
      tax = (grossSalary - TAX_THRESHOLD) * TAX_RATE;
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
  
    // Print the results
    console.log("Gross salary:", grossSalary);
    console.log("Tax:", tax);
    console.log("NHIF deduction:", nhifDeduction);
    console.log("NSSF deduction:", nssfDeduction);
    console.log("Net salary:", netSalary);
  
    return netSalary;
  }
  
  // Test the function
  calculateNetSalary(50000, 10000);
  
  // Output