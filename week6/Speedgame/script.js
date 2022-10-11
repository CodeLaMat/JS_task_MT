const btnStart = document.querySelector(".startButton");
const btnStop = document.querySelector(".stopButton");
const btnClose = document.querySelector(".btnClose");
const circles = document.querySelectorAll(".circle");
const scoreIs = document.querySelector("#scoreIs");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const resultText = document.querySelector("#resultText");

// Sound Variables
let startSound = new Audio("music/game_start_sound.wav");
let clickSound = new Audio("music/Click_sound.wav");
let mediumScoreSound = new Audio("music/medium_score_sound.wav");
let higScoreSound = new Audio("music/success.mp3");
let ohNoSound = new Audio("music/ohNo.mp3");

let score = 0;
let active = 0;
let timer;
let pace = 1000;

// We create random numbers
const randomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCircle(i));
});

const clickCircle = (i) => {
  if (i !== active) {
    return stopGame();
  } else {
    console.log("circle clicked was:", i + 1);
    score++;
    clickSound.play();
  }
  scoreIs.textContent = `Your score is: ${score}`;
};

// Start game
const startGame = () => {
  startSound.play();
  let nextActive = pickNew(active);

  circles[nextActive].classList.toggle("activated");
  circles[active].classList.remove("activated");

  active = nextActive;

  console.log("curent active numer is:", active);
  timer = setTimeout(startGame, pace);
  pace = pace - 10;

  function pickNew(active) {
    let nextActive = randomTime(0, 3);

    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
};

// Stop game
const stopGame = () => {
  clearTimeout(timer);
  overlay.style.display = "flex";
  modal.style.display = "block";
  btnClose.style.display = "block";
  startSound.pause();
  if (score == 0 && score <= 5) {
    resultText.textContent = `Are you so slow? Your score is: ${score}. Let's try again.`;
    ohNoSound.play();
  } else if ((score) => 6 && score <= 20) {
    resultText.textContent = `You did well. But I believe you can do better. Your score is ${score}. Let's try again.`;
    mediumScoreSound.play();
  } else if (score > 20) {
    resultText.textContent = `You are close to beat a record of all time. Your score is: ${score}.`;
    higScoreSound.play();
  }
};

// Reset
const resetGame = () => {
  overlay.style.display = "none";
  window.location.reload();
};

btnStop.addEventListener("click", stopGame);
btnStart.addEventListener("click", startGame);
btnClose.addEventListener("click", resetGame);
