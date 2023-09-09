const password = document.getElementById("password");
const password_confirm = document.getElementById("password-confirm");
const otherInputs = document.querySelectorAll(".otherinputs"); // Replace with the appropriate selector
const submitButton = document.getElementById("submitButton");
submitButton.disabled = true;
submitButton.style.opacity = 0.5;

function validate() {
    let isValid = true;

    // Check if the password and password confirmation fields match and are not empty
    if (password.value !== password_confirm.value || password.value === "" || password_confirm.value === "") {
        isValid = false;
    }

    // Check other input fields (modify the condition as needed)
    otherInputs.forEach(input => {
        if (input.value === "") {
            isValid = false;
        }
    });

    if (isValid) {
        // All fields are properly filled
        password.style.border = "1px solid green";
        password_confirm.style.border = "1px solid green";
        
        submitButton.disabled = false;
        submitButton.style.opacity = 1;
    } else {
        // At least one field is not properly filled
        if(password.value != "" && password_confirm!=""){
            password.style.border = "1px solid red";
            password_confirm.style.border = "1px solid red";
        }
        submitButton.disabled = true;
        submitButton.style.opacity = 0.5;
        
    }
    otherInputs.forEach(input => {
        if(input.value !=""){
        input.style.border = "1px solid green";}
    });
}

password.addEventListener("keyup", validate);
password_confirm.addEventListener("keyup", validate);
otherInputs.forEach(input => {
    input.addEventListener("keyup", validate);
});