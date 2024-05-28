import { findProductById } from "./productData.mjs";
import { getLocalStorage, setLocalStorage, getQueryString } from "./utils.mjs";
import { cartCount } from "./stores.mjs";

// selectors
const companyName = document.querySelector("#productName");
const itemName = document.querySelector("#productNameWithoutBrand");
const image = document.querySelector("#productImage");
const price = document.querySelector("#productFinalPrice");
const color = document.querySelector("#productColorName");
const description = document.querySelector("#productDescriptionHtmlSimple");
const addToCart = document.querySelector("#addToCart");

//using imports from utils
const itemType = getQueryString("itemType");
const id = getQueryString("id"); // Access the value of the "id" parameter
const product = await findProductById(id, itemType);


export function addProductToCart(product) {
  const cartArray = getLocalStorage("so-cart") || [];
  cartArray.push(product);
  setLocalStorage("so-cart", cartArray);
  cartCount.set(cartArray.length);
}
  

function addContentToPage(discountPercent = null) {
  companyName.textContent = product.Brand.Name;
  itemName.textContent = product.NameWithoutBrand;
  image.src = product.Image;

  // change price if their is a discount
  if (product.isclearance != null && product.isclearance == true) {
    // suggested final price is a placeholder until i find the discounted price
    price.innerHTML = `
  <span class="clearance">${product.FinalPrice}</span>
  ${product.SuggestedRetailPrice} ${discountPercent}% off`;
  
  } else {
    price.textContent = product.FinalPrice;
  }

  color.textContent = product.Colors[0].ColorName;
  description.innerHTML = product.DescriptionHtmlSimple;
  addToCart.setAttribute("data-id", product.Id);
}

// function displaySelectedProductColor(){}

addContentToPage();
