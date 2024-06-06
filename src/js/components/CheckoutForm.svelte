<script>
  import { getLocalStorage } from "../utils.mjs";
  import { calculateTotal } from "../calculateTotal.mjs";

  let list = [];
  let subtotal = calculateTotal(getLocalStorage("so-cart"));
  let tax = 0;
  let shipping = 0;
  let orderTax = 0;
  let total = subtotal + tax;
</script>

<form >
  <fieldset class="customer-details">
    <legend>Shipping</legend>
    <label for="orderDate">Date:</label>
    <input type="orderDate" id="orderDate" /><br />

    <label for="fname">First name:</label>
    <input type="text" id="fname" /><br />

    <label for="lname">Last name:</label>
    <input type="text" id="lname" /><br />

    <label for="street">Street:</label>
    <input type="text" id="street" /><br />

    <label for="city">City name:</label>
    <input type="text" id="city" /><br />

    <label for="state">State name:</label>
    <input type="text" id="state" /><br />

    <label for="zip"> zip Code:</label>
    <input type="text" id="zip" /><br />
  </fieldset>

  <fieldset class="card-details">
    <legend>Payment</legend>
    <label for="cardnumber">credit card:</label>
    <input type="text" id="cardnumber" /><br />

    <label for="expiration">expiration Date:</label>
    <input type="text" id="expiration" /><br />

    <label for="code">security code:</label>
    <input type="text" id="code" /><br />
  </fieldset>

  <fieldset class="checkout-summary">
    <legend>Order Summary</legend>
    <p>item subtotal ${subtotal}</p>
    <p>shipping Estimate ${shipping}</p>

    <p>tax ${tax}</p>
    <p>order Tax ${orderTax}</p>
    <p>order total ${total}</p>
  </fieldset>

  <button type="submit">Submit</button>
</form>
