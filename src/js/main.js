// main.js
import ProductList from "./components/ProductList.svelte";
import { getAlertsData } from "/js/alert.mjs";
import { renderHeaderFooter } from "./utils.mjs";

getAlertsData();
renderHeaderFooter();

new ProductList({
    target: document.querySelector(".products"),
    props: { category: "tents" },
});

