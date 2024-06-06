import { getLocalStorage } from "./utils.mjs";

export function calculateTotal() {
  const cartItems = getLocalStorage("so-cart");
  const validCartItems = cartItems.filter((item) => item !== null);

  if (validCartItems.length > 0) {
    let total = validCartItems.reduce(
      (acc, item) => acc + item.quantity * item.FinalPrice,
      0
    );
    console.log("hi"+total)

    return Math.round(total * 100) / 100;
    
  }
}

export function displayCartTotal(total) {
  const cartFooter = document.querySelector(".cart-footer");
    console.log(total)
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
  if (total === 0) {
    cartFooter.remove();
  }
}
