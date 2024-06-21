// import { persistentLog } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";

const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  const data = res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}

export async function getProductsByCatagory(category) {
  try {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  } catch (error) {
    return error;
  }
}

export async function findProductById(id, category = "tents") {
  const products = await getProductsByCatagory(category);

  console.log(products);
  console.log(typeof products);
  try {
    if (typeof products !== "list" && products.Results != null) {
      return products.Result.find((item) => item.Id === id);
    } else {
      return products.find((item) => item.Id === id);
    }
  } catch (error) {
    return error;
  }
}

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return await fetch(`${baseURL}checkout`, options).then(convertToJson);
}

export async function loginRequest(credentials) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };
  const response = await fetch(`${baseURL}login`, options).then(convertToJson);

  // persistentLog("Received token:", response.accessToken);
  return response.accessToken;
}

export async function getOrders(token) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(baseURL + "orders", options).then(convertToJson);
  return response;
}