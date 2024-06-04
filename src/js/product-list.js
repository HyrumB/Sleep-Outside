import ProductList from "./components/ProductList.svelte";
import { getQueryString } from "./utils.mjs";

const itemCategory = getQueryString("itemType");

new ProductList({
    target: document.querySelector(".products"),
    props: { category:  itemCategory },
});