//  Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.


let min = 0;
let input= prompt("How many numbers would you like to input?")


for (let n = 0; n<input; n ++); {
       let num = Number(prompt("Enter number"));
       if (num>=0 && min==0) {
              min=num;
       }
       else if ( num<min);
              console.log ("The samllest number is", min);

              