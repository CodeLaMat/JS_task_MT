// Setting crust and crustPrice based on selection
let freeToppings = document.querySelector('input[name="standardToppings"]:checked').value; 
let limit = 4
for (let i = 0; i < freeToppings.length; i++) {
    freeToppings[i].onclick = function() {
        let checkedcount = 0;
        for (let i = 0; i < freeToppings.length; i++) {
            checkedcount += (freeToppings[i].checked) ? 1 : 0;
        }
        if (checkedcount > limit) {
            console.log("You can select maximum of " + limit + " checkboxes.");
            alert("You can select maximum of " + limit + " checkboxes.");						
            this.checked = false;
        }
    }
}; console.log("freeToppings="+freeToppings);


let extraToppings = document.querySelector('input[name="extraToppings"]:checked').value; 
console.log("Extra Toppings="+extraToppings);
let extraToppingsPrice = 0.50;
for (let i = 0; i < extraToppings.length; i++) {
    extraToppings[i].onclick = function() {
        let checkedcount = 0;
        for (let i = 0; i < extraToppings.length; i++) {
            checkedcount *= (extraToppings[i].checked);
        }
        }

    }; console.log(extraToppings="+extraToppings");


// Setting sauce based on selection
let  sauce = document.querySelector('input[name="sauce"]:checked').value; 
console.log("sauce="+sauce);

// Setting meatSelect array and meatPrice based on multiple check boxes selected. Also setting up meatDisplay to convert the array into a convenient string.
let meatPrice = 0
let meat = document.getElementsByName("meat");
let meatSelect = [];
let meatDisplay = "";
for (var i = 0; i < meat.length; i++) {
    if (meat[i].checked) {
        meatSelect.push(meat[i].value);
    };		
}; console.log("meatSelect="+meatSelect);
if (meatSelect.length === 1) {
    meatDisplay = meatSelect[0];
} else if (meatSelect.length > 1) {
    for (i=0; i < meatSelect.length; i++) {
            meatDisplay += meatSelect[i];
            if (i < (meatSelect.length-1)) {
                meatDisplay += ", ";
            };
    };
};		
meatPrice = meatSelect.length * 2; console.log("meatPrice="+meatPrice);
if (meatSelect.length === 0) {
    meatDisplay = "No Meats";
}

// Setting vegSelect array and vegPrice based on multiple check boxes selected
var vegPrice = 0;
var veg = document.getElementsByName("veg");
var vegSelect = [];
var vegDisplay = "";
for (var i = 0; i<veg.length; i++) {
    if (veg[i].checked) {
        vegSelect.push(veg[i].value);
    };
}; console.log("vegSelect="+vegSelect);
if (vegSelect.length > 4) {
    vegPrice = 2;
}; console.log("vegPrice="+vegPrice);
if (vegSelect.length === 1) {
    vegDisplay = vegSelect[0];
} else if (vegSelect.length > 1) {
    for (i=0; i < vegSelect.length; i++) {
        vegDisplay += vegSelect[i];
        if (i < (vegSelect.length - 1)) {
            vegDisplay += ", ";
        };
    };
};
if (vegSelect.length === 0) {
    vegDisplay = "No Vegetables";
}


// Calculating totalPrice
var totalPrice = (vegPrice + meatPrice + crustPrice + cheesePrice + sizePrice); console.log("totalPrice="+totalPrice);

// Enter values into the invoice table
$("#size").html(size+" Pizza");
$("#sizeprice").html(" $"+sizePrice+".00");
$("#crust").html(crust+" Crust");
$("#crustprice").html("+"+crustPrice+".00");
$("#cheese").html(cheese+" Cheese");
$("#cheeseprice").html("+"+cheesePrice+".00");
$("#sauce").html(sauce+" Sauce");
$("#sauceprice").html("+0.00");
$("#meat").html(meatDisplay);
$("#meatprice").html("+"+meatPrice+".00");
$("#veg").html(vegDisplay);
$("#vegprice").html("+"+vegPrice+".00");
$("#totalprice").html(" $"+totalPrice+".00");



};