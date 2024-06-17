export function validateForm() {
    let isValid = true;

    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");

    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(message => message.textContent = "");

    if (fnameInput.value === "") {
        isValid = false;
        const fnameError = document.createElement("div");
        fnameError.classList.add("error-message");
        fnameError.textContent("Please enter your first name.");
        fnameInput.parentNode.insertBefore(fnameError, fnameInput.nextSibling);
    } else if (!/^[A-Za-z'-]+$/.test(fnameInput.value)) {
        isValid = false;
        const fnameError = document.createElement("div");
        fnameError.classList.add("error-message");
        fnameError.textContent("Please enter a valid first name.");
        fnameInput.parentNode.insertBefore(fnameError, fnameInput.nextSibling);
    }

    if (lnameInput.value === "") {
        isValid = false;
        const lnameError = document.createElement("div");
        lnameError.classList.add("error-message");
        lnameError.textContent("Please enter your last name.");
        lnameInput.parentNode.insertBefore(lnameError, lnameInput.nextSibling);
    } else if (!/^[A-Za-z'-]+$/.test(lnameInput.value)) {
        isValid = false;
        const lnameError = document.createElement("div");
        lnameError.classList.add("error-message");
        lnameError.textContent("Please enter a valid last name.");
        lnameInput.parentNode.insertBefore(lnameError, lnameInput.nextSibling);
    }

    return isValid;
}