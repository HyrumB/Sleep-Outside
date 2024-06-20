import { setLocalStorage} from "./utils.mjs";
import { loginRequest } from "./externalServices.mjs";
import{jwt_decode} from "jwt-decode";


const tokenKey = "so-token";
export async function login(credentials, redirect = "/") {
    try {
        const token = await loginRequest(credentials);
        setLocalStorage(tokenKey, token);
        // because of the default arg provided above...if no redirect is provided send them Home.
        window.location = redirect;
    } catch (err) {
        alertMessage(err.message.message);
    }
}

// function checkLogin(){}

export function isTokenValid(token){
    if (token) {
        try {
            const decoded = jwt_decode(token);
            if (decoded.exp * 1000 < Date.now()) {
                console.log("token expired");
                return false;
            }
            return true;
        } catch (err) {
            return false;
        }
    }
    return false;
}