import { getAlertsData } from "./alert.mjs";

export function validateForm() {
  let isValid = true;

  document.getElementById("fnameError").textContent = "";
  document.getElementById("lnameError").textContent = "";
  document.getElementById("streetError").textContent = "";
  document.getElementById("cityError").textContent = "";
  document.getElementById("stateError").textContent = "";
  document.getElementById("zipError").textContent = "";
  document.getElementById("cardNumberError").textContent = "";
  document.getElementById("expirationError").textContent = "";
  document.getElementById("cvvError").textContent = "";

  const fname = document.getElementById("fname").value.trim();
  if (!/^[A-Za-z'-]+$/.test(fname)) {
    document.getElementById("fnameError").textContent =
      "First name contains invalid characters";
    getAlertsData()
    isValid = false;
  } else if (fname.length < 2 || fname.length > 30) {
    document.getElementById("fnameError").textContent =
      "First name must be between 2 and 30 characters long";
    isValid = false;
  }

  const lname = document.getElementById("lname").value.trim();
  if (!/^[A-Za-z'-]+$/.test(lname)) {
    document.getElementById("lnameError").textContent =
      "Last name contains invalid characters";
    isValid = false;
  } else if (lname.length < 2 || lname.length > 30) {
    document.getElementById("lnameError").textContent =
      "Last name must be between 2 and 30 characters long";
    isValid = false;
  }

  const street = document.getElementById("street").value.trim();
  if (!/^[A-Za-z0-9\s,.'-]+$/.test(street)) {
    document.getElementById("streetError").textContent =
      "Street address contains invalid characters";
    isValid = false;
  } else if (street.length < 5 || street.length > 100) {
    document.getElementById("streetError").textContent =
      "Street address must be between 5 and 100 characters long";
    isValid = false;
  }

  const city = document.getElementById("city").value.trim();
  if (!/^[A-Za-z\s'-]+$/.test(city)) {
    document.getElementById("cityError").textContent =
      "City contains invalid characters";
    isValid = false;
  } else if (city.length < 2 || city.length > 50) {
    document.getElementById("cityError").textContent =
      "City must be between 2 and 50 characters long";
    isValid = false;
  }

  const state = document.getElementById("state").value.trim().toUpperCase();
  const stateCodes = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  if (!stateCodes.includes(state)) {
    document.getElementById("stateError").textContent =
      "Please enter a valid US state code";
    isValid = false;
  }

  const zip = document.getElementById("zip").value.trim();
  if (!/^\d{5}(-\d{4})?$/.test(zip)) {
    document.getElementById("zipError").textContent =
      "Zip must be in format 12345 or 12345-6789";
    isValid = false;
  }

  const cardNumber = document.getElementById("cardnumber").value.trim();
  if (!/^\d+$/.test(cardNumber)) {
    document.getElementById("cardNumberError").textContent =
      "Credit card number contains invalid characters";
    isValid = false;
  } else if (cardNumber.length < 13 || cardNumber.length > 16) {
    document.getElementById("cardNumberError").textContent =
      "Please enter a valid credit card number";
    isValid = false;
  }

  const expiration = document.getElementById("expiration").value.trim();
  if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiration)) {
    document.getElementById("expirationError").textContent =
      "Expiration date must be in format MM/YY";
    isValid = false;
  }

  const code = document.getElementById("code").value.trim();
  if (!/^[0-9]{3,4}$/.test(code)) {
    document.getElementById("cvvError").textContent =
      "Please enter a valid CVV";
    isValid = false;
  }

  return isValid;
}
