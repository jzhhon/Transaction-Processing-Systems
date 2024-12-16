/*
    Program name: hw4.js
    Name: Jean Mina
    Date created: 9/15/2024
    Date last updated: 12/4/2024
    Version: 1.1
    Purpose: Homework 4 js
*/

// Dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// Range slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

// First name validate js code
function validateFname() {
    let fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    // Checks if first name field is empty
    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
        return false;
    } else if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

// Middle initial validate js code
function validateMini() {
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]?$/;

    // Makes middle initial uppercase
    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    // Checks that middle initial is exactly one uppercase letter or empty
    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

// Last name validate js code
function validateLname() {
    let lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    // Checks if last name field is empty
    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
        return false;
    } else if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

// DOB validation js code
function validateDob() {
    let dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future.";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago.";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// SSN validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    // Regex for SSN pattern
    const ssnR = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// Address 1 validation js code
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please enter something on address line.";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// City validate js code
function validateCity() {
    let city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// Zip code validation js code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d]/g, ""); // Removes any non-number characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = "Zip code cannot be left blank.";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5); // Ensures only 5 digits
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

// Email validation js code
function validateEmail() {
    let email = document.getElementById("email").value;
    var emailR = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (email === "") {
        document.getElementById("email-error").innerHTML = "Email cannot be empty.";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// Phone number validation js code
function validatePhone() {
    const phoneInput = document.getElementById("phnum");
    const phone = phoneInput.value.replace(/\D/g, ""); // Removes all non-number characters

    if (phone.length === 0) {
        document.getElementById("phnum-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    }

    const formattedPhone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 10);
    phoneInput.value = formattedPhone;
    document.getElementById("phnum-error").innerHTML = "";
    return true;
}
