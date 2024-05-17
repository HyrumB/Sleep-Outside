// main.js
import ProductList from "./components/ProductList.svelte";
import { generateAlerts } from "./alert.mjs";

generateAlerts();

new ProductList({
  target: document.querySelector(".products"),
});
