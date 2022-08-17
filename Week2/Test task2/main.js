const checkNumbers = () => {
    const x = Number (prompt('Please enter the first number?'));
    const y = Number (prompt('Please enter the second number?'));
    const z = Number (prompt('Please enter the third number?'));
    
    if (x=>0 && y >= 0 && z >= 0) {
        mult = x+y+z;
        sum = x*y*z;
      console.log("sum is:",sum, "multiplication is:",mult);
    } else if (age < 27) {
       console.log("Right age for military service");
    } else if (x<=0 && y <= 0 && z <= 0) {
        if (x<=0 || y <= 0 || z <= 0) {
        console.log("all numbers are negative");
        }
    } else  {
        sum=x+y+z;
       console.log("sum is:", sum);
      }
  };
  
  checkNumbers();