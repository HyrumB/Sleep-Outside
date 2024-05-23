import { getLocalStorage } from "./utils.mjs";

export function calculateTotal() {
    const cartItems = getLocalStorage("so-cart");
    const validCartItems = cartItems.filter((item) => item !== null);
  
    if (validCartItems.length > 0) {
      const cartFooter = document.createElement("div");
      cartFooter.classList.add("cart-footer");
  
      const total = validCartItems.reduce(
        (acc, item) => acc + item.FinalPrice,
        0
      );
  
      const totalParagraph = document.createElement("p");
      totalParagraph.classList.add("cart-total");
      totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  
      cartFooter.appendChild(totalParagraph);
  
      document.querySelector("main").appendChild(cartFooter);
    }
  }