const form = document.querySelector('form');
const customer = document.querySelector('#name');
const size = document.querySelectorAll('[name="size"]');
const toppings = document.querySelectorAll('input[name="toppings"]');
const delivery = document.querySelector('#delivery');
const order = document.querySelector('#order');

const takeOrder = (event) => {
    let customerName = customer.value;
    let sizeResult = '';
    let toppingsResult = [];
    let deliveryPrice = delivery.options[delivery.selectedIndex].value;
    let totalPrice = 0;
  
    size.forEach((item) => {
      if (item.checked) {
        sizeResult = item.value;
      }
    });
  
    switch (sizeResult) {
      case 'two':
        totalPrice += 7.5;
        break;
      case 'four':
        totalPrice += 10.5;
        break;
      case 'six':
        totalPrice += 12.5;
        break;
      case 'eight':
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
  
    if (deliveryPrice == "homeDelivery") {
      totalPrice += 5;
    }

  
    order.textContent = `Thank you for the order, ${customerName}. You ordered pizza for ${sizeResult}. The added toppings are:${toppingsResult.join(', ')} and the delivery method is: ${deliveryPrice}. Total price is: ${totalPrice} €.`;
    
  
    order.style['boxShadow'] = '0 0 5px #999999';
    order.style["border"] = '1px solid #eee';
  
    form.reset();
  };
  
  form.addEventListener("submit", takeOrder);
