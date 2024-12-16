// Dynamic date js code
const d = new Date();
document.getElementById("today").innerHTML = d.toLocaleDateString();

// First name validation js code
function validateFname() {
    let fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-\s]+$/;

    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name cannot be empty.";
        return false;
    } else if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name must be at least 2 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

// Middle initial validation js code
function validateMini() {
    let mini = document.getElementById("mini").value.toUpperCase();
    document.getElementById("mini").value = mini;

    const namePattern = /^[A-Z]{1}$/;
    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "Middle initial must be one uppercase letter.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

// Last name validation js code
function validateLname() {
    let lname = document.getElementById("lname").value.trim();
    const namePattern = /^[a-zA-Z'-\s]+$/;

    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name cannot be empty.";
        return false;
    } else if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name must be at least 2 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

// Date of birth validation js code
function validateDob() {
    let dob = document.getElementById("dob").value;
    let date = new Date(dob);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future.";
        return false;
    } else if (date < maxDate) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago.";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}
