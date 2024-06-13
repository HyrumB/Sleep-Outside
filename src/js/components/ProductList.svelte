<script>
  import { getProductsByCatagory } from "../externalServices.mjs";

  export let category;
  let promise = getProductsByCatagory(category);

  function filter(allItems) {
    let limitedItems = allItems.slice(0, 4);
    return limitedItems;
  }

  function calculateDiscountPrice(price, discountPercent=20) {
    return (price * (discountPercent / 100)).toFixed(2);
  }
</script>

{#await promise then items}
  <p>Top products: {category}</p>
  <ul class="product-list">
    <!-- {#each filter(items) as item} -->
    {#each items as item}
      <li class="product-card">
        <a
          href={`/product_pages/index.html?itemType=${category}&id=${item.Id}`}
        >
          <img src={item.Images.PrimaryMedium} items alt={item.Name} />
          <h3 class="card__brand">{item.Brand.Name}</h3>
          <h2 class="card__name">{item.NameWithoutBrand}</h2>
          <p class="product-card__price">
            {#if item.IsClearance}
              <span class="clearance">
                ${item.SuggestedRetailPrice} </span>
              ${calculateDiscountPrice(item.SuggestedRetailPrice,)}
              {20}% off
            {:else}
              ${item.FinalPrice} {/if}
          </p>
        </a>
      </li>
    {/each}
  </ul>
{/await}
