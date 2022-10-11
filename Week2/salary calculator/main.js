const calculate = () => {
  const x = Number(prompt("Please enter the salary you get for hour?"));
  const y = Number(prompt("Please tell us how many hours you work per day?"));

  let norm, ext1, ext2;

  norm = x * y;
  ext1 = (y - 7) * (x * 0.5) + norm;
  ext2 = (y - 9) * (x * 1) + ext1;

  if (y <= 7) {
    console.log("You will get: eur", norm);
  } else if (y > 7) {
    if (y <= 9) {
      console.log("You will get: eur", ext1);
    } else if (y >= 9) {
      console.log("You will get: eur", ext2);
    }
  }
};

calculate();
