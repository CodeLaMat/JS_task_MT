const checkNumbers = () => {
    const x = Number (prompt('Please enter the first number?'));
    const y = Number (prompt('Please enter the second number?'));
    const z = Number (prompt('Please enter the third number?'));

    let sum,mult;

    if (x>=0 && y>=0 && z>= 0) {
        sum = x+y+z;
        mult = x*y*z;
        console.log("sum is:",sum, "multiplication is:",mult);
    }
    else if (x<=0 || y <= 0 || z <= 0) {
        if (x <= 0 && y <= 0 && z <= 0) {
        console.log("only negatives");
    }   else {
        sum = x+y+z;
        console.log("sum is:",sum);
    }
}
}
        
  checkNumbers();