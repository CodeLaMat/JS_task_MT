const btnStart = document.querySelector('.startButton');
const btnStop = document.querySelector('.stopButton');
const circles = document.querySelectorAll('.circles');
const scoreIs = document.querySelector('#scoreIs');
const resultText = document.querySelector('#resultText');
const btnClose = document.querySelector(".btnClose");

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".result");


let score = 0;
let count = 1;
let currentCircle;
let pace = 3000;
let timer = 0;

activateCircle = () =>{

    //creates a random whole value between 0 and 3
    const rndNum = Math.floor(Math.random() * 4);
       // trackes the current circle so we can clear it next round
        currentCircle = rndNum; 
        
        //highlights the newly picked circle
        circles[rndNum].classList.add("active");

        //decreases the interval to speed up the circles
        pace -= 10;

        //resets count for button press
        count = 1;
        setTimer();

    //checks if the ramdom number is the same as last and if so recalls the function to get a new number
    if (rndNum === currentCircle) {
        activateCircle();
    }
    else{
        //checks the size of the circle array so we dont get a null value 
        if (currentCircle < circles.length) {
            circles[currentCircle].classList.remove("active");
        }
       
    }

}

setTimer = () => {
    timer = setTimeout(activateCircle, pace)     
}
startGame = () => {
    //resets the score text, and clears the active circle when the game starts
    scoreIs.textContent = 0;
    score = 0;
    setTimer();
}

stopGame = () => {
    circles[currentCircle].classList.remove("active");
    clearTimeout(timer);
    openModal();
}

checkCircle = (circle) => {
    if (circle.classList.contains("active")) 
    {
         //count is to make sure you cant get more then one point for pressing the active circle
        if (count == 1) {
            score++;
            scoreIs.textContent = score;
        } 
        count++;
    }
    else
    {
        stopGame();
    }
}

circles.forEach((circle) => {
    circle.addEventListener("click", function(){
        if (circle.click) {
            checkCircle(circle); 
        }
    });
} )

function openModal() {
    //this is a better way to do this. Keep the style in the css.
    overlay.classList.toggle("visible");
}

function closeModal() {
    overlay.classList.toggle("visible");
}

btnStart.addEventListener("click", startGame);
btnStop.addEventListener("click", stopGame);
btnClose.addEventListener("click", closeModal);