const checkNumber = () => {
  const x = window.prompt("Please enter the number?");

  if (x >= 0) {
    if (x % 2) {
      return console.log("The number is even");
    } else {
      console.log("The number is odd");
    }
  }
};
checkNumber();
