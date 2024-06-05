import { getLocalStorage } from "./utils.mjs";
import { calculateTotal } from "./calculateTotal.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const validCartItems = cartItems.filter((item) => item !== null);

  // console.log(validCartItems);

  const htmlItems = validCartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const totalPrice = (item.quantity * item.FinalPrice).toFixed(2);
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.quantity}</p>
  <p class="cart-card__price">$${totalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

document.addEventListener("DOMContentLoaded", calculateTotal);
