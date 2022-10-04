const form = document.querySelector("form");
const customerName = document.querySelector("#name");
const toppings = document.querySelectorAll('input[name="toppings"]');
const delivery = document.querySelector("#delivery");
const size = document.querySelectorAll('[name="size"]');
let orderText = document.querySelector(".orderText");

let deliveryPrice = 0;
let totalPrice = 0;
let sizeResult = "";
let toppingsResult = [];
let customer = customerName.value;

const takeOrder = (e) => {
  e.preventDefault();

  let deliveryResult = delivery.options[delivery.selectedIndex].value;

  size.forEach((item) => {
    if (item.checked) {
      sizeResult = item.value;
    }
  });

  switch (sizeResult) {
    case "Normal":
      totalPrice += 7.5;
      break;
    case "Big Pizza":
      totalPrice += 10.5;
      break;
    case "King Pizza":
      totalPrice += 12.5;
      break;
    case "Family Pizza":
      totalPrice += 15.5;
      break;
    default:
  }

  toppings.forEach((item) => {
    if (item.checked) {
      toppingsResult.push(item.value);
    }
  });

  if (toppingsResult.length > 4) {
    totalPrice += (toppingsResult.length - 4) * 0.5;
  }

  if (deliveryResult == "home") {
    totalPrice += 5;
  }

  orderText.innerHTML = `Thank you for the order,${customer}. Your ordered pizza is: ${sizeResult}. The following toppings will be added to your pizza: ${toppingsResult}. Delivery method is: ${deliveryResult}. Total price is: ${totalPrice} €.`;

  form.reset();
};

form.addEventListener("submit", takeOrder);
