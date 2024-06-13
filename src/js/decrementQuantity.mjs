import { getLocalStorage, setLocalStorage, getCartCount } from "./utils.mjs";
import { calculateTotal } from "./calculateTotal.mjs";
import { renderCartContents } from "./cart";
import { cartCount } from "./stores.mjs";
import { removeFromCart } from "./removeFromCart.mjs";

export function decrementQuantity(event) {
  if (event.target.closest(".cart-card__decrement")) {
    event.preventDefault();
    // console.log("button clicked");
    const itemId = event.target.closest(".cart-card__decrement").dataset.id;
    // console.log(itemId);
    const cartItems = getLocalStorage("so-cart");
    const validCartItems = cartItems.filter((item) => item !== null);
    const newCartItems = validCartItems.map((item) => {
      if (item.Id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else if (item.Id === itemId && item.quantity === 1) {
        return item;
      } else {
        return item;
      }
    });
    setLocalStorage("so-cart", newCartItems);
    renderCartContents();
    calculateTotal();
    cartCount.set(getCartCount());
  }
}
