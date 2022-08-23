//  Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.
 
let sum=0;
let counter = 0;
let average;
let seconQuestion = true;


while(confirmation = "n")

do {let input = Number(prompt("Would you like to enter the number?"));
       if (confirmation = "n"); {
              break;
       }
       if (confirmation = "n") {

       }


    sum+=input;
    counter++;
} while (counter!=5)
console.log("Average was", sum/counter);




//  do {   x = prompt("Please enter the distance in km."); 
//         y = prompt("Please enter the spent time in hour"); 
//         console.log(x/y);

//         } while (x>0); 
                  


