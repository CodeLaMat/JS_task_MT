const checkAge = () => {
  const age = window.prompt("Please enter your age");

  if (age < 18) {
    return console.log("You are too young");
  } else if (age < 27) {
    return console.log("Right age for military service");
  } else if (age < 41) {
    return console.log("You are in reserve");
  } else if (age < 55) {
    return console.log("You are in backup reserve");
  } else {
    return console.log("you are too old");
  }
};

checkAge();
