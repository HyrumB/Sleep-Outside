import { getLocalStorage } from "./utils.mjs";

export function calculateTotal() {
  const cartItems = getLocalStorage("so-cart");
  const validCartItems = cartItems.filter((item) => item !== null);

  const cartFooter = document.querySelector(".cart-footer");

  if (validCartItems.length > 0) {
    let total = validCartItems.reduce(
      (acc, item) => acc + item.quantity * item.FinalPrice,
      0
    );

    if (cartFooter) {
      cartFooter.querySelector(
        ".cart-total"
      ).textContent = `Total: $${total.toFixed(2)}`;
    } else {
      const newCartFooter = document.createElement("div");
      newCartFooter.classList.add("cart-footer");

      const totalParagraph = document.createElement("p");
      totalParagraph.classList.add("cart-total");
      totalParagraph.textContent = `Total: $${total.toFixed(2)}`;

      newCartFooter.appendChild(totalParagraph);
      document.querySelector("main").appendChild(newCartFooter);
    }
  } else {
    if (cartFooter) {
      cartFooter.remove();
    }
  }
}
