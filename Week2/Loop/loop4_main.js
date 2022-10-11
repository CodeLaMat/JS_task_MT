// Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

// do {   x = prompt("Please enter the next number");

//     } while (x=20);
//                      {
//         let
//          console.log(even);
//         }

let even = 0;

for (let counter = 0; counter < 3; counter++);
{
  let input = Number(prompt("Please enter the next number"));
  if (input % 2 == 0) {
    even++;
  }
}
console.log("There was", even, "even numbers");
