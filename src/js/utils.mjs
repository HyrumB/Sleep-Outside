import Header from "./components/MainHeader.svelte";
import Footer from "./components/MainFooter.svelte";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : [];
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getQueryString(item = "id"){
  const queryString = window.location.search; // grab url
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(item);
  return product;
}

export function getCartCount() {
  const cartItems = getLocalStorage("so-cart");
  const validCartItems = cartItems.filter((item) => item !== null);
  if (validCartItems.length > 0) {
    const count = validCartItems.length;
    return count;
  } else {
    return 0;
  }
}

export function renderHeaderFooter() {
  new Header({
    target: document.querySelector(".divider"),
  })

  new Footer({
    target: document.querySelector("footer")
  })
}