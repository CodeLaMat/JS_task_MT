//  Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let sum = 0;
let counter = 0;

do {
  let input = Number(prompt("Please enter the next number"));

  sum += input;
  counter++;
} while (counter != 5);
console.log("Average was", sum / counter);
