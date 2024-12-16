// Set today's date
const d = new Date();
document.getElementById("today").innerHTML = d.toLocaleDateString();

// First name validation
function validateFname() {
    let fname = document.getElementById("fname").value.trim();
    const namePattern = /^[a-zA-Z'-]+$/;

    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name cannot be empty.";
        return false;
    } else if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Invalid characters in first name.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

// Middle initial validation
function validateMini() {
    let mini = document.getElementById("mini").value.toUpperCase();
    const namePattern = /^[A-Z]{1}$/;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "Middle initial must be one uppercase letter.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        document.getElementById("mini").value = mini; // Enforce uppercase
        return true;
    }
}

// Last name validation
function validateLname() {
    let lname = document.getElementById("lname").value.trim();
    const namePattern = /^[a-zA-Z'-]+$/;

    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name cannot be empty.";
        return false;
    } else if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Invalid characters in last name.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

// Date of birth validation
function validateDob() {
    const dobInput = document.getElementById("dob");
    const dob = new Date(dobInput.value);
    const maxAgeDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (dob > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date of birth cannot be in the future.";
        dobInput.value = "";
        return false;
    } else if (dob < maxAgeDate) {
        document.getElementById("dob-error").innerHTML = "Date of birth is too old.";
        dobInput.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}
