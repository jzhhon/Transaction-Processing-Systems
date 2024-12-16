// Current date
const today = new Date();
document.getElementById("today").innerHTML = today.toLocaleDateString();

// Validate first name
function validateFname() {
    const fname = document.getElementById("fname").value.trim();
    const namePattern = /^[a-zA-Z'-\s]{1,30}$/;
    if (fname === "") {
        document.getElementById("fname-error").innerText = "First name cannot be empty.";
        return false;
    } else if (!namePattern.test(fname)) {
        document.getElementById("fname-error").innerText = "Only letters, apostrophes, and dashes are allowed.";
        return false;
    }
    document.getElementById("fname-error").innerText = "";
    return true;
}

// Validate middle initial
function validateMini() {
    const mini = document.getElementById("mini").value.toUpperCase();
    document.getElementById("mini").value = mini;
    if (!mini.match(/^[A-Z]?$/)) {
        document.getElementById("mini-error").innerText = "Middle initial must be a single uppercase letter.";
        return false;
    }
    document.getElementById("mini-error").innerText = "";
    return true;
}

// Additional validations...
