const password = document.getElementById("password");
const password_confirm = document.getElementById("password-confirm");
const submitButton = document.getElementById("submitButton");
submitButton.disabled = true;
submitButton.style.opacity = 0.5;

function validate() {
    if (password.value === password_confirm.value && password.value !== "" && password_confirm.value !== "") {
        password.style.border = "1px solid green";
        password_confirm.style.border = "1px solid green";
        submitButton.disabled = false;
        submitButton.style.opacity = 1;
    } else {
        password.style.border = "1px solid red";
        password_confirm.style.border = "1px solid red";
        submitButton.disabled = true;
        submitButton.style.opacity = 0.5;
    }

    if (password.value === "" && password_confirm.value === "") {
        password.style.border = "";  // Remove the border style
        password_confirm.style.border = "";  // Remove the border style
    }
}

password.addEventListener("keyup", validate);
password_confirm.addEventListener("keyup", validate);
