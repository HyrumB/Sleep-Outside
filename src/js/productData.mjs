function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getData(category) {
  try {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  } catch (error) {
    return error;
  }
}

export async function findProductById(id, category = "tents") {
  const products = await getData(category);
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
