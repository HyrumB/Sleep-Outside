import { getOrders } from "./externalServices.mjs";

export default async function displayOrders(token) {
  const ordersContainer = document.getElementById("orders-container");
  if (!ordersContainer) {
    console.error("Orders container not found");
    return;
  }

  try {
    const orders = await getOrders(token);
    if (orders && orders.length > 0) {
      ordersContainer.innerHTML = orders.map(orderTemplate).join("");
    } else {
      ordersContainer.innerHTML = "<p>No orders found.</p>";
    }
  } catch (err) {
    console.error("Failed to fetch orders", err);
  }
}

function orderTemplate(order) {
  if (!order || !order.items) {
    return "";
  }

  return `
    <div class="order-card">
      <div class="order-card__header">
        <h3 class="order-card__title">Order ${order.id}</h3>
        <p class="order-card__date">${order.orderDate}</p>
        <p class="order-card__name">${order.fname} ${order.lname}</p>
        <p class="order-card__street">${order.street}</p>
        <p class="order-card__city-state-zip">${order.city}, ${order.state} ${order.zip}</p>
        <p class="order-card__price">$${order.orderTotal}</p>
      </div>
      <div class="order-card__body">
        ${order.items
          .map(
            (item) =>
              `<p>${item.name} - $${item.price} - Quantity: ${item.quantity}</p>`
          )
          .join("")}
      </div>
    </div>
  `;
}
