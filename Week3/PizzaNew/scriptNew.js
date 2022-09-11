const form = document.querySelector("form");
const customer = document.querySelector('#name');
const toppings = document.querySelectorAll('input[name="toppings"]');
const delivery = document.querySelector('#delivery');
const size = document.querySelectorAll('[name="size"]');
let orderText = document.querySelector('.orderText');
let deliveryResult = delivery.options[delivery.selectedIndex].value;

let toppingsPrice = 0;
let pizzaPrice = 0;
let deliveryPrice = 0;
let totalPrice = 0;
let sizeResult = '';
let toppingsResult = [];
let customerName = customer.value;


const takeOrder = () => {

    size.forEach((item) => {
        if (item.checked) {
          sizeResult = item.value;
        }
      });
    
      switch (sizeResult) {
        case '7.50':
        totalPrice += 7.5;
          break;
        case '10.50':
        totalPrice += 10.5;
          break;
        case '12.50':
        totalPrice += 12.5;
          break;
        case '15.50':
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
    
        if (deliveryResult == 'home') {
          totalPrice += 5;
      }
    
      let text = 

      form.reset();

        orderText.textContent = `Thank you for the order,${customerName}. You ordered pizza for ${sizeResult}. We will add toppings: ${toppingsResult.join(', ')}and delivery method is: ${deliveryResult}. Total price is: ${totalPrice} €.`;

    };


    form.addEventListener('submit', takeOrder);