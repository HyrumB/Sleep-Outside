import { getLocalStorage } from "./utils.mjs";

export function calculateTotal() {
  const cartItems = getLocalStorage("so-cart");
  const validCartItems = cartItems.filter((item) => item !== null);

  if (validCartItems.length > 0) {
    let total = validCartItems.reduce(
      (acc, item) => acc + item.quantity * item.FinalPrice,
      0
    );
    console.log("hi" + total);

    return Math.round(total * 100) / 100;
  }
  return 0;
}

export function displayCartTotal(total) {
  const cartFooter = document.querySelector(".cart-footer");
  console.log(total);

  if (total === 0) {
    cartFooter.remove();
  }
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

    const checkoutButton = document.createElement("button");
    checkoutButton.classList.add("checkout-button");
    checkoutButton.textContent = "Checkout";
    checkoutButton.addEventListener("click", () => {
      console.log("Checkout clicked");
      window.location.href = "../checkout/index.html";
    })
    newCartFooter.appendChild(checkoutButton);
  }
}
