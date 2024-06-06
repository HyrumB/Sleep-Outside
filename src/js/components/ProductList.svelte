<script>
  import { getProductsByCatagory } from "../productData.mjs";

  export let category;
  let promise = getProductsByCatagory(category);

  function filter(allItems) {
    let limitedItems = allItems.slice(0, 4);
    return limitedItems;
  }
</script>

{#await promise then items}
  <p>Top products: {category}</p>
  <ul class="product-list">

    <!-- {#each filter(items) as item} -->
    {#each items as item}

      <li class="product-card">
        <a href={`/product_pages/index.html?itemType=${category}&id=${item.Id}`}>
          <img src={item.Images.PrimaryMedium} items alt="{item.Name}" />
          <h3 class="card__brand">{item.Brand.Name}</h3>
          <h2 class="card__name">{item.NameWithoutBrand}</h2>
          <p class="product-card__price">${item.ListPrice}</p>
        </a>
      </li>
    {/each}

  </ul>
{/await}
