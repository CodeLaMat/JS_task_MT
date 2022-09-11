const form = document.querySelector("form");
const customer = document.querySelector('#name');
const toppings = document.querySelectorAll('input[name="toppings"]');
const delivery = document.querySelector('#delivery');
const order = document.querySelector('.order');
const size = document.querySelectorAll('[name="size"]');
let deliveryResult = delivery.options[delivery.selectedIndex].value;
let selectedToppings =document.querySelector("#selectedToppings");
let totalPrice = document.querySelector("#priceResults");


let toppingsPrice = 0;
let pizzaPrice = 0;
let deliveryPrice = 0;
totalPrice = 0;
let sizeResult = '';
let toppingsResult = [];
let resetButton;
let customerName = customer.value;

const takeOrder = () => {

  size.forEach((item) => {
    if (item.checked) {
      sizeResult = item.value;
    }
  });

  toppings.forEach((item) => {
    if (item.checked) {
        toppingResult.push(item.value);
    }
});
  getTopping(toppingResult.length);


  
function sizeCalculator () {
  let pizzaSize = size.value;
  if (pizzaSize = "two") {
      pizzaPrice += 7.5;
      chosenPizza.textContent = 'Your choise for the pizza size is, "two pizzas"';
  } else if (pizzaSize = "four") {
      pizzaPrice += 10.5;
      chosenPizza.textContent = 'Your choise for the pizza size is, "four pizzas"';
  } else if (pizzaSize = "six") {
      pizzaPrice += 12.5;
      chosenPizza.textContent = 'Your choise for the pizza size is, "six pizzas"';
  } else if (pizzaSize = "eight") {
      pizzaPrice += 15.5;
      chosenPizza.textContent = 'Your choise for the pizza size is, "eight pizzas"';
  }  
}

function checkedtoppings (item) {
  if (item.checked) {
  toppingsResult.push(item.value);
}
}

    if (toppingsResult.length > 4) {
    pizzaPrice += (toppingsResult.length - 4) * 0.5;
    chosenToppings.textContent = 'Your choise for the toppings are, ${toppingsResult.join(', ')}';

}

function deliveryCalculator () {
  let delivery = delivery.value;
    if (delivery = "home") {
        deliveryPrice += 5;
        deliveryMethod.textContent = 'The prefered delivery method is, Home delivery';
    } else if(delivery = "eatIn") {
      deliveryPrice = 0;
      deliveryMethod.textContent = 'You will eat here';
    } 
    else if(delivery = "pickUp") {
      deliveryPrice = 0;
      deliveryMethod.textContent = 'We will prepare your order for pickup';
    } 

};

function totalPriceCalculator () {
  totalPrice= pizzaPrice+toppingsPrice+deliveryPrice;

  document.getElementsByClassName(".order").textContent= `Thank you for the order,${customerName}. You ordered pizza for ${sizeResult}. We will add toppings: ${toppingsResult.join(', ')} and delivery method is: ${deliveryResult}. Total price is: ${totalPrice} €.`;
    

}
  orderSubmit.addEventListener('click', takeOrder);
  
}