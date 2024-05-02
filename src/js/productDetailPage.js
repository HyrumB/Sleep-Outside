// json/tents.json data source

const companyName = document.querySelector("#company__name");
const itemName = document.querySelector("#product__name");
const image = document.querySelector("#product__image");
const price = document.querySelector(".product-card__price");
const color = document.querySelector(".product__color");
const description = document.querySelector(".product__description");

const url = "../json/tents.json";

var productID = "880RR" 


async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

}



// find product by id
function findProductById(id) {
  const products = getData();
  console.log(products.find((item) => item.Id === id));


}

findProductById(productID);

companyName.textContent = "The North Face";
itemName.textContent = "The North Face";
image.src =
  "../images/tents/the-north-face-talus-tent-4-person-3-season-in-golden-oak-saffron-yellow~p~985rf_01~320.jpg";
price.textContent = "$9.99";
color.textContent = "black";
description.textContent = "how much wood could a wood chuck chuck";

