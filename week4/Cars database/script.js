const searchInput = document.querySelector("#searchInput");
const btnSearch = document.querySelector("#searchButton");
const searchResult = document.querySelector("#searchResult");

const btnAdd = document.querySelector("#addCar");
const table = document.querySelector("table");
const lcsInput = document.querySelector("#licenseNumber");
const mnfInput = document.querySelector("#manufacturer");
const mdlInput = document.querySelector("#model");
const ownrInput = document.querySelector("#owner");
const prcInput = document.querySelector("#price");
const clrInput = document.querySelector("#colour");

let licenseDatabase = [];

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  let license = lcsInput.value;
  let manufacturer = mnfInput.value;
  let model = mdlInput.value;
  let owner = ownrInput.value;
  let price = prcInput.value;
  let colour = clrInput.value;

  let template = `
                <tr>
                <td>${license}</td>
                <td>${manufacturer}</td>
                <td>${model}</td>
                <td>${owner}</td>
                <td>${price}</td>
                <td>${colour}</td>
                </tr>`;

  table.innerHTML += template;
  if (license.value != "") {
    licenseDatabase.push(license);
  }
  return licenseDatabase;
});

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  let licenseInSearch = searchInput.value;
  let foundLicense = [];

  licenseDatabase.forEach((license) => {
    if (licenseInSearch == license) {
      foundLicense.push(license);
      searchResult.textContent = `${foundLicense} license number is found in our database`;
    } else {
      foundLicense = " ";
      searchResult.textContent =
        "There is not any car with that license number";
    }
  });
});
