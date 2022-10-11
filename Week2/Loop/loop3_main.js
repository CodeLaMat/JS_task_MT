// Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

do {
  distance = prompt("Please enter the distance in km.");
  time = prompt("Please enter the spent time in hour");
  console.log("average speed is", distance / time);
} while (distance != 0);
