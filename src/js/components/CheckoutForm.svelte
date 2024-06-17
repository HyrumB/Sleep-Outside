<script>
  import { onMount } from "svelte";
  import { getLocalStorage } from "../utils.mjs";
  import { calculateTotal } from "../calculateTotal.mjs";
  import { checkout } from "../externalServices.mjs";

  let list = [];
  let subtotal = 0;
  let shipping = 0;
  let tax = 0;
  let total = 0;

  function init() {
    const cart = getLocalStorage("so-cart");
    subtotal = calculateTotal(cart);
    calcSummary(subtotal, cart);
  }

  onMount(init);

  function calcSummary(subtotal, cart) {
    const taxPercent = 0.06;
    tax = subtotal * taxPercent;
    shipping = 10;
    total = subtotal + shipping + tax;

    const validCart = cart.filter((item) => item !== null);
    list = validCart;
    shipping += (validCart.length - 1) * 2;
  }

  const packageItems = function (items) {
    return items.map((item) => {
      return {
        id: item.Id,
        price: item.FinalPrice,
        name: item.Name,
        quantity: 1,
      };
    });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const json = {};
      
      formData.forEach((value, key) => {
        json[key] = value;
      });
      
      json.orderDate = new Date().toISOString();
      json.orderTotal = total.toFixed(2);
      json.tax = tax.toFixed(2);
      json.shipping = shipping.toFixed(2);
      json.items = packageItems(getLocalStorage("so-cart"));

      console.log("Form JSON:", JSON.stringify(json, null, 2));

      try {
        const res = await checkout(json);
        console.log("Response:", res);
      } catch (checkoutErr) {
        console.error("Checkout Error:", checkoutErr);
      }
    } catch (err) {
      console.error("Form Error:", err);
    }
  };
</script>

<form on:submit={handleSubmit}>
  <!-- Shipping details -->
  <fieldset class="customer-details">
    <legend>Shipping</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" required /><br />
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" required /><br />
    <label for="street">Street:</label>
    <input type="text" id="street" name="street" required /><br />
    <label for="city">City:</label>
    <input type="text" id="city" name="city" required /><br />
    <label for="state">State:</label>
    <input type="text" id="state" name="state" required /><br />
    <label for="zip">Zip code:</label>
    <input type="text" id="zip" name="zip" required /><br />
  </fieldset>

  <!-- Payment details -->
  <fieldset class="card-details">
    <legend>Payment</legend>
    <label for="cardnumber">Credit card number:</label>
    <input type="text" id="cardnumber" name="cardNumber" required /><br />
    <label for="expiration">Expiration date:</label>
    <input type="text" id="expiration" name="expiration" required /><br />
    <label for="code">Security code:</label>
    <input type="text" id="code" name="code" required /><br />
  </fieldset>

  <!-- Order summary -->
  <fieldset class="checkout-summary">
    <legend>Order Summary</legend>
    <p>Item subtotal: ${subtotal.toFixed(2)}</p>
    <p>Shipping estimate: ${shipping.toFixed(2)}</p>
    <p>Tax: ${tax.toFixed(2)}</p>
    <p>Order total: ${total.toFixed(2)}</p>
  </fieldset>

  <button type="submit">Submit</button>
</form>
