import { getLocalStorage, setLocalStorage, getCartCount } from "./utils.mjs";
import { calculateTotal } from "./calculateTotal.mjs";
import { renderCartContents } from "./cart";
import { cartCount } from "./stores.mjs";

export function removeFromCart(event) {
  if (event.target.closest(".cart-card__remove")) {
    event.preventDefault();
    // console.log("button clicked. function connected.");
    const itemId = event.target.closest(".cart-card__remove").dataset.id;
    // console.log(itemId);
    const cartItems = getLocalStorage("so-cart");
    const validCartItems = cartItems.filter((item) => item !== null);
    const newCartItems = validCartItems.filter((item) => item.Id !== itemId);
    setLocalStorage("so-cart", newCartItems);
    renderCartContents();
    addEventListener("DOMContentLoaded", calculateTotal);
    cartCount.set(getCartCount());
  }
}
