import { getLocalStorage, setLocalStorage, getCartCount } from "./utils.mjs";
import { calculateTotal, displayCartTotal } from "./calculateTotal.mjs";
import { renderCartContents } from "./cart";
import { cartCount } from "./stores.mjs";

export function incrementQuantity(event) {
    if (event.target.closest(".cart-card__increment")) {
        event.preventDefault();
        // console.log("button clicked");
        const itemId = event.target.closest(".cart-card__increment").dataset.id;
        const cartItems = getLocalStorage("so-cart");
        const validCartItems = cartItems.filter((item) => item !== null);
        const newCartItems = validCartItems.map((item) => {
            if (item.Id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            } else {
                return item;
            }
        });
        setLocalStorage("so-cart", newCartItems);
        renderCartContents();
        const total = calculateTotal();
        displayCartTotal(total);
        cartCount.set(getCartCount());
    }
}