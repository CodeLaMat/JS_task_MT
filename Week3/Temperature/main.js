const tempConverter = (id, val) => {
    val = parseFloat(val);
  
    const inputFahrenheit = document.querySelector("#inputFahrenheit");
    const inputCelsius = document.querySelector("#inputCelsius");
    const inputKelvin = document.querySelector("#inputKelvin");
  
    if (id == "inputFahrenheit") {
      inputCelsius.value = ((val - 32) / 1.8).toFixed(2);
      inputKelvin.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
    }
    if (id == "inputCelsius") {
      inputFahrenheit.value = (val * 1.8 + 32).toFixed(2);
      inputKelvin.value = (val + 273.15).toFixed(2);
    }
    if (id == "inputKelvin") {
      inputFahrenheit.value = ((val - 273.15) * 1.8 + 32).toFixed(2);
      inputCelsius.value = (val - 273.15).toFixed(2);
    }
  };
  
// My file
// function tempConverter (value){
//     value = Number(value)

//     let celsius= Number (document.getElementById ("celsius").value);
//     let farenheit = Number (document.getElementById("farenheit").value);
//     let kelvin = Number (document.getElementById("kelvin").value);

//     let outputFar_Cel= (farenheit-32)/1.8; 
//     let outputFar_Kel=((farenheit-32)/1.8)+273.15;
//     let outputCel_Far=(celsius*1.8)+32;
//     let outputCel_Kel= celsius+273.15;


//     // outputFar_Cel
// document.getElementById("celsius").value = (value-32)/1.8; 
//     // outputFar_Kel
// document.getElementById("kelvin").value = ((value-32)/1.8)+273.15;
//     // outputCel_Far
// document.getElementById("farenheit").value = (value*1.8)+32;
//     // outputCel_Kel
// document.getElementById("kelvin").value = value+273.15;
//     // outputKel_Far    
// document.getElementById("farenheit").value = ((value-273.15)*1.8)+32;
//     // outputKel_Ce
// document.getElementById("celsius").value = value-273.15;
