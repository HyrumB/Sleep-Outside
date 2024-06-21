import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { loginRequest } from "./externalServices.mjs";
import { jwtDecode } from "jwt-decode";
// import { persistentLog } from "./utils.mjs";

const tokenKey = "so-token";
export async function login(credentials, redirect = "/") {
  try {
    const token = await loginRequest(credentials);
    setLocalStorage(tokenKey, token);
    // persistentLog("token", token);
    // persistentLog(
    //   "Token valid after login:",
    //   isTokenValid(getLocalStorage(tokenKey))
    // );
    // because of the default arg provided above...if no redirect is provided send them Home.
    window.location = redirect;
  } catch (err) {
    console.log(err);
  }
}

export function checkLogin() {
    const token = getLocalStorage(tokenKey);
    // persistentLog(`Token from localStorage: ${token}`);
    const validToken = isTokenValid(token);
    // persistentLog(`Is token valid: ${validToken}`);
  
    if (!validToken) {
      localStorage.removeItem(tokenKey);
      const location = window.location;
    //   persistentLog(`Redirecting to login from: ${location.pathname}`);
      window.location = `/login/index.html?redirect=${location.pathname}`;
    } else {
    //   persistentLog("Token is valid, staying on protected page");
      return token;
    }
  }

export function isTokenValid(token) {
    // persistentLog(`Checking token validity: ${token}`);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // persistentLog(`Decoded token: ${JSON.stringify(decoded)}`);
        if (decoded.exp * 1000 < Date.now()) {
        //   persistentLog("Token expired");
          return false;
        }
        // persistentLog("Token is valid and not expired");
        return true;
      } catch (err) {
        // persistentLog(`Error decoding token: ${err.message}`);
        return false;
      }
    }
    // persistentLog("No token provided");
    return false;
  }
