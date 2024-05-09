const companyName = document.querySelector("#productName");
const itemName = document.querySelector("#productNameWithoutBrand");
const image = document.querySelector("#productImage");
const price = document.querySelector("#productFinalPrice");
const color = document.querySelector("#productColorName");
const description = document.querySelector("#productDescriptionHtmlSimple");
const addToCart = document.querySelector("#addToCart");

//pull id from url
const queryString = window.location.search; // grab url
const urlParams = new URLSearchParams(queryString);

const itemType = urlParams.get("itemType");
const id = urlParams.get("id"); // Access the value of the "id" parameter
console.log(id);
console.log(itemType);
const dataPath = `../json/${itemType}.json`;

// get the dictonary from the product json
async function getData() {
  const response = await fetch(dataPath);
  const data = await response.json();
  if (response.ok) {
    console.log(data); // output
    return data;
  } else {
    throw new Error("Bad Response");
  }
}

// grab product from array based on var id
async function findProductById(id) {
  var products = await getData();
  console.log(products[id]);
  return products[id];
}

// function displaySelectedProductColor(){

// }

async function addContentToPage(discountedPrice = null) {
  const product = await findProductById(id);

  companyName.textContent = product.Brand.Name;
  itemName.textContent = product.NameWithoutBrand;
  image.src = product.Image;

  // change price if their is a discount
  if (discountedPrice != null) {
    price.textContent = `${product.finalPrice} ${discountedPrice} `;
  } else {
    price.textContent = product.FinalPrice;
  }

  color.textContent = product.Colors[0].ColorName;
  description.innerHTML = product.DescriptionHtmlSimple;
  addToCart.setAttribute("data-id", product.Id);
}

addContentToPage();
