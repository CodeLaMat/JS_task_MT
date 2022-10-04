const form = document.querySelector('form');
const customerName = document.querySelector('#name');
const customerAge = document.querySelector('#age');
const health = document.querySelectorAll('input[name="health"]');
const habits = document.querySelectorAll('input[name="habits"]');
const resultText = document.querySelector('#resultText');

  let riskIndex = 500; 
  let age = "";


const giveRiskIndex = (event) => {
    event.preventDefault();

    age = customerAge.value;
    customer = customerName.value;

        if (age >18 && age <25) {
          riskIndex = riskIndex + riskIndex*0.1;
          console.log("Your risk Index is", riskIndex);
      }
        else if (age >=26 && age<35) {
          riskIndex = riskIndex + riskIndex*0.3;
          console.log("Your risk Index is", riskIndex);
      }
        else if (age >=36 && age<45) {
          riskIndex = riskIndex + riskIndex*0.6;
          console.log("Your risk Index is", riskIndex);
      }
        else if (age >=46 && age<55) {
          riskIndex = riskIndex + riskIndex*1;
          console.log("Your risk Index is", riskIndex);
      }
        else if (age >=56 && age<65) {
          riskIndex = riskIndex + riskIndex*1.5;
          console.log("Your risk Index is", riskIndex);
      }
        else if (age >=66) {
          riskIndex = riskIndex + riskIndex*2.1;
          console.log("Your risk Index is", riskIndex);
      }
         
  
        health.forEach((item) => {
        if (item.checked) {
        riskIndex += riskIndex*0.01;
      }
      });

      habits.forEach((item) => {
        if (item.checked) {
          riskIndex += riskIndex*0.05;
        }
        if (habits == "dailyExercise") {
          riskIndex -= riskIndex*0.5;
      }   
  
    });
    
      form.reset();
      resultText.innerHTML = `Dear,${customer}. You risk index is: ${riskIndex}.Please care your health.`;


    };
 
  

    form.addEventListener('submit', giveRiskIndex);


    