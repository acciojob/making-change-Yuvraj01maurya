const makeChange = (c) => {
  // your name here
  const quarters = Math.floor(c / 25);
  const remainderAfterQuarters = c % 25;
  
  const dimes = Math.floor(remainderAfterQuarters / 10);
  const remainderAfterDimes = remainderAfterQuarters % 10;
  
  const nickels = Math.floor(remainderAfterDimes / 5);
  const pennies = remainderAfterDimes % 5;
  
  return { "q": quarters, "d": dimes, "n": nickels, "p": pennies };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
