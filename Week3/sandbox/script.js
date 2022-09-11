// let i = "#";

// while (i.length<=7) {
// console.log (i);
// i = i+ "#";

// }


// for (i=1; i<=100; i++) {
//     if (i %3== 0) {
//     console.log ("Fizz");
//  }  else if (i%5==0) {
//     console.log ("Buzz");
//  } else {
//     console.log (i);
//  }
// }



let board = "";
let oddRow = " # # # #";
let evenRow ="# # # # ";

for (let i = 0; i<8; i ++) {
        if (i % 2 === 0) {
                board += oddRow + "\n"
        } else {
                board += evenRow + "\n"
        }
}

console.log (board);

    
