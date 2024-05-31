import ProductList from "./components/ProductList.svelte";
import { getQueryString } from "./utils.mjs";

const itemCategory = getQueryString("itemType");
console.log(itemCategory);

new ProductList({
    target: document.querySelector(".products"),
    props: { category:  itemCategory },
});