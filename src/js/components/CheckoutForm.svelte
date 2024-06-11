<script>
  import { getLocalStorage } from "../utils.mjs";
  import { calculateTotal } from "../calculateTotal.mjs";

  let list = [];


  let subtotal= 0
  let shipping= 0
  let tax=  0
  let total= 0

  function init(){
    subtotal = calculateTotal(getLocalStorage("so-cart"));
    let cart = getLocalStorage("so-cart");

    calcSummary(subtotal, cart);
  }

  function calcSummary(subtotal, cart) {
    let taxPercent = 0.06;
    tax = subtotal * taxPercent;
    shipping = 10;
    total = subtotal + shipping + tax;

    const validCart = cart.filter((item) => item !== null);
    list = validCart.length;
    shipping += (list -1) * 2;
  }

  init();
  

</script>

<form>
  <fieldset class="customer-details">
    <legend>Shipping</legend>
    <label for="orderDate">Date:</label>
    <input type="orderDate" id="orderDate" required /><br />

    <label for="fname">First name:</label>
    <input type="text" id="fname" required /><br />

    <label for="lname">Last name:</label>
    <input type="text" id="lname" required /><br />

    <label for="street">Street:</label>
    <input type="text" id="street" required /><br />

    <label for="city">City name:</label>
    <input type="text" id="city" required /><br />

    <label for="state">State name:</label>
    <input type="text" id="state" required /><br />

    <label for="zip"> zip Code:</label>
    <input type="text" id="zip" required /><br />
  </fieldset>

  <fieldset class="card-details">
    <legend>Payment</legend>
    <label for="cardnumber">credit card:</label>
    <input type="text" id="cardnumber" required /><br />

    <label for="expiration">expiration Date:</label>
    <input type="text" id="expiration" required /><br />

    <label for="code">security code:</label>
    <input type="text" id="code" required /><br />
  </fieldset>

  <fieldset class="checkout-summary">
    <legend>Order Summary</legend>
    <p>item subtotal ${subtotal.toFixed(2)}</p>
    <p>shipping Estimate ${shipping.toFixed(2)}</p>

    <p>tax ${tax.toFixed(2)}</p>
    <p>order total ${total.toFixed(2)}</p>
  </fieldset>

  <button type="submit">Submit</button>
</form>
