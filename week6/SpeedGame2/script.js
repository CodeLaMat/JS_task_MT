const btnStart = document.querySelector('.startButton');
const btnStop = document.querySelector('.stopButton');
const btnClose = document.querySelector('.btnClose');
const circles = document.querySelectorAll('.circle');
const scoreIs = document.querySelector('#scoreIs');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const resultText = document.querySelector('#resultText');


let score = 0;
let active = 0;
let timer;
let pace = 1000;

// We create random numbers
const randomTime = (min, max) => {
    return Math.floor(Math.random() * (max - min+1))  + min;
};

circles.forEach ((circle, i) => {
    circle.addEventListener("click", () => clickCircle(i))
});



const clickCircle = (i) => {
    if (i !== active) {
        return stopGame();
    } else {
        console.log("circle clicked was:", i+1);
        score++;
    }
    scoreIs.textContent = `Your score is: ${score}`;
};


// Start game
const startGame = () => {
    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle('activated');
    circles[active].classList.remove('activated');

    active = nextActive;

    console.log("curent active numer is:", active)
    timer = setTimeout(startGame,pace);
    pace = pace - 10;

    function pickNew (active){
        let nextActive = randomTime(0,3);

        if (nextActive != active){
         return nextActive;   
        } else {
            return pickNew(active);
        }
}
};

// Stop game
const stopGame = ()=> {
    clearTimeout(timer);
    overlay.style.display = "flex";
    modal.style.display = "block";
    btnClose.style.display = "block";
    resultText.textContent = `The game is over. Your score is: ${score}`;
};


// Reset
const resetGame = ()=> {
      overlay.style.display = "none";
      window.location.reload();
};


btnStop.addEventListener("click", stopGame);
btnStart.addEventListener("click", startGame);
btnClose.addEventListener("click", resetGame);


