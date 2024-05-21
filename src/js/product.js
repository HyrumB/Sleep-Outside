import { findProductById } from "./productData.mjs";
import { addProductToCart } from "./productDetail.mjs";
import { cartAnimation } from "./cartAnimation.mjs";

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);

  cartAnimation();
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
