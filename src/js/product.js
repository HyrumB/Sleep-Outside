import { getLocalStorage } from "./utils.mjs";
import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  const cartArray = getLocalStorage("so-cart") || [];
  cartArray.push(product);
  setLocalStorage("so-cart", cartArray);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);

  const cartImage = document.querySelector(".cart svg");
  cartImage.classList.add('wiggle');
  
  setTimeout(() => {
    cartImage.classList.remove('wiggle');
  }, 500);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
