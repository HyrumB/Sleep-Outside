import { findProductById } from "./externalServices.mjs";
import { getLocalStorage, setLocalStorage, getQueryString, getCartCount } from "./utils.mjs";
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
  const validCartItems = cartArray.filter((item) => item !== null);
  const existingProduct = validCartItems.find((item) => item.Id === product.Id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    product.quantity = 1;
    cartArray.push(product);
  }

  setLocalStorage("so-cart", cartArray);
  cartCount.set(getCartCount());
}

function addContentToPage(discountPercent = 20) {
  try {

    companyName.textContent = product.Brand.Name;
    itemName.textContent = product.NameWithoutBrand;
    image.src = product.Images.PrimaryLarge


    // change price if their is a discount
    if (product.IsClearance == true) {
      
      let discountPrice = product.SuggestedRetailPrice * (discountPercent / 100);
      // suggested final price is a placeholder until i find the discounted price
      
      price.innerHTML = `
  
      <span class="clearance">$${product.SuggestedRetailPrice}</span>
      $${discountPrice.toFixed(2) } ${discountPercent}% off`;
    } else {
      price.textContent = product.FinalPrice;
    }

    color.textContent = product.Colors[0].ColorName;
    description.innerHTML = product.DescriptionHtmlSimple;
    addToCart.setAttribute("data-id", product.Id);
  } catch (error) {
    console.log(error);
    addToCart.style.display = "none";
    itemName.textContent = "404 ERROR: product not found";
  }
}

// function displaySelectedProductColor(){}

addContentToPage();
