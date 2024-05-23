// main.js
import ProductList from "./components/ProductList.svelte";
import { generateAlerts } from "./alert.mjs";
import { renderHeaderFooter } from "./utils.mjs";

generateAlerts();
// renderHeaderFooter();

new ProductList({
    target: document.querySelector(".products"),
    props: { category: "tents" },
});

