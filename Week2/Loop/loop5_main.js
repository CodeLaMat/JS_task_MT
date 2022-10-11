// Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

// do {x = prompt("Please enter the next number");

// }
// while (x= 0);
// {
//     let sum = x%2==0;
//     console.log(average);
// }

let input;
let sum = 0;
let count = 0;

while (input != 0) {
  input = Number(prompt("enter a number"));
  sum += input;
  count++;
}

console.log(sum / count - 1);
