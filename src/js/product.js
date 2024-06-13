import { findProductById } from "./externalServices.mjs";
import { addProductToCart } from "./productDetail.mjs";
import { cartAnimation } from "./cartAnimation.mjs";
import { getQueryString } from "./utils.mjs";

// add to cart button event handler
async function addToCartHandler(e) {
  const itemType = getQueryString("itemType");
  const product = await findProductById(e.target.dataset.id, itemType);
  addProductToCart(product);

  cartAnimation();
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
