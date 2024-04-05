const showButton = document.getElementById("show-button");
const passwordField = document.getElementById("password");

function toggleShowPassword() {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    if (type === "password") {
        showButton.innerText = "Show";
    } else {
        showButton.innerText = "Hide";
    }
}

showButton.addEventListener("click", toggleShowPassword);