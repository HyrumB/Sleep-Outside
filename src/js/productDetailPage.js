const companyName = document.querySelector("#company__name");
const itemName = document.querySelector("#product__name");
const image = document.querySelector("#product__image");
const price = document.querySelector(".product-card__price");
const color = document.querySelector(".product__color");
const description = document.querySelector(".product__description");

const dataPath = "../json/tents.json";

//pull id from url
const queryString = window.location.search; // grab url
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id"); // Access the value of the "id" parameter

// get the dictonary from the product json
async function getData() {
  const response = await fetch(dataPath);
  const data = await response.json();
  console.log(data); // output
  return data;
}

// find product by id
async function findProductById(id) {
  var products = await getData();
  console.log(products[id]);
  return products[id];
}

async function addContentToPage() {
  const product = await findProductById(id);

  companyName.textContent = product.Brand.Name;
  itemName.textContent = product.NameWithoutBrand;
  image.src = product.Image;
  // price.textContent = product.FinalPrice;
  color.textContent = product.Color.ColorName;
  description.textContent = product.DescriptionHtmlSimple;
}

addContentToPage();