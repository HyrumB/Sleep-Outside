import { getLocalStorage } from "./utils.mjs";
import { calculateTotal, displayCartTotal } from "./calculateTotal.mjs";
import { removeFromCart } from "./removeFromCart.mjs";
import { incrementQuantity } from "./incrementQuantity.mjs";
import { decrementQuantity } from "./decrementQuantity.mjs";
import { checkLogin } from "./auth.mjs";

document.addEventListener("DOMContentLoaded", checkLogin);

export function renderCartContents() {
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
  <span class="cart-card__increment" data-id="${item.Id}">
  <img src="/images/plus-svgrepo-com.svg" alt="add one to cart" />
  </span>
  <span class="cart-card__decrement" data-id="${item.Id}">
  <img src="/images/less-svgrepo-com.svg" alt="remove one from cart" />
  </span>
  <span class="cart-card__remove" data-id="${item.Id}">
  <img src="/images/trash-bin-minimalistic-svgrepo-com.svg" alt="remove from cart" />
  </span>
</li>`;

  return newItem;
}

renderCartContents();

var total = calculateTotal();

document.addEventListener("DOMContentLoaded", displayCartTotal(total));
document.addEventListener("click", removeFromCart);
document.addEventListener("click", incrementQuantity);
document.addEventListener("click", decrementQuantity);
