function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export function getData(category = "tents") {
  console.log(`../json/${category}.json`);
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
}

export async function findProductById(id, category = "tents") {
  const products = await getData(category);
  console.log(products);
  console.log(typeof products);
  
  if (typeof products !== 'list') {
    return products.Result.find((item) => item.Id === id);
  }
  else{
    return products.find((item) => item.Id === id);
  }
}
