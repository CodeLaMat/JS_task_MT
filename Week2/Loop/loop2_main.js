// Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print answer in one line.

// for (let x = 98, y=2;  x>0, y<=100; x -= 2,y+=2) {

//        console.log (y , x); 
//        }  


       let answer = "";
       let end = 100;

       for (let x = 2; x<end; x+=2) {

        answer += " " + x + " ";
        answer += " " + end + " ";
        end-=2;
        }  

        console.log  (answer); 

