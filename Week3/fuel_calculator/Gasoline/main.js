const calculate = () => {
  const price = Number(document.getElementById("price").value);
  const money = +document.querySelector("#money").value;
  const answer = document.querySelector("#answer");

  let text;

  const amount = Math.floor(money / price);

  amount >= 10
    ? (text = `You could get about ${amount} liters, good, now you can escape`)
    : (text = `You could get about ${amount} liters, Sorry, you have to stay`);

  answer.textContent = text;
};
