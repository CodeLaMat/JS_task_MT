const btnStart = document.querySelector('.startButton');
const btnStop = document.querySelector('.stopButton');
const btnClose = document.querySelector('.btnClose');
const circles = document.querySelectorAll('.circles');
const scoreIs = document.querySelector('#scoreIs');
const resultText = document.querySelector('#resultText');


let score=0;
let active = 0;
let timer;
let pace = 3000;

const randomTime = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

circles.forEach ((circle, i) => {
    circle.addEventListener("click",() => clickCircle(i))
});

const clickCircle =(i) => {
    console.log("circle clicked was:", i+1);
    score++;
    scoreIs.textContent = `Your score is: ${score}`;
};

const startGame = () => {
    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle(active);
    circles[active].classList.remove(active);

    active = nextActive;

    console.log("curent active numer is:", active)
    timer = setTimeout(startGame,pace);
    pace = pace - 10;

    function pickNew (){
        let nextActive = randomTime(0,3);

        if (nextActive !=active){
         return nextActive;   
        } else {
            return pickNew(active);
        }
}
};

const stopGame = ()=> {
    overlay.style.visibility="visible";
    clearTimeout(timer);
};

const resetGame = ()=> {
    window.location.reload();

};

btnStop.addEventListener("click", stopGame);
btnStart.addEventListener("click", startGame);
btnClose.addEventListener("click", resetGame);


