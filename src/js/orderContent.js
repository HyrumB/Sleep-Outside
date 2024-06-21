import { checkLogin } from "./auth.mjs";
import displayOrders from "./orders.js";

const token = checkLogin();
displayOrders(token);
