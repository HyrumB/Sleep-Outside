import { getQueryString } from "./utils.mjs";
import { login } from "./auth.mjs";
// import { persistentLog } from "./utils.mjs";

const redirect = getQueryString("redirect");
// persistentLog("Redirect value:", redirect);
const button = document.querySelector("button");

button.addEventListener("click", function onclick() {
    console.log("login clicked");
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    login({email, password}, redirect)
});

