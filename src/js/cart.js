import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function calculateTotal() {
  const cartItems = getLocalStorage("so-cart");

  if (cartItems.length > 0) {
    const cartFooter = document.createElement("div");
    cartFooter.classList.add("cart-footer");

    const total = cartItems.reduce((acc, item) => acc + item.FinalPrice, 0);

    const totalParagraph = document.createElement("p");
    totalParagraph.classList.add("cart-total");
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;

    cartFooter.appendChild(totalParagraph);

    document.querySelector("main").appendChild(cartFooter);
  }
}

renderCartContents();
document.addEventListener("DOMContentLoaded", calculateTotal);
