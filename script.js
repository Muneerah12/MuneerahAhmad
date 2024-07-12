function checkPassword() {
    var password = document.getElementById("password").value;
    var length = password.length;
    var complexity = new Set(password).size;
    var hasUpper = /[A-Z]/.test(password);
    var hasLower = /[a-z]/.test(password);
    var hasDigit = /\d/.test(password);
    var hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    var resultElement = document.getElementById("result");
    if (length < 8 || complexity < 4 || !(hasUpper && hasLower && hasDigit && hasSpecial)) {
        var instructions = "Weak: ";
        if (length < 8) {
            instructions += "Password should be at least 8 characters long. ";
        }
        if (complexity < 4) {
            instructions += "Password should contain a variety of character types. ";
        }
        if (!(hasUpper && hasLower && hasDigit && hasSpecial)) {
            instructions += "Password should contain uppercase letters, lowercase letters, digits, and special characters.";
        }
        resultElement.textContent = instructions;
        resultElement.style.color = "red";
    } else {
        resultElement.textContent = "Strong: Password meets complexity requirements.";
        resultElement.style.color = "green";
    }
}
