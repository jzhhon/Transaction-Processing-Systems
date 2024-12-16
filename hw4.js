/*
    Program name: hw4.js
    Name: Jean Mina
    Date created: 9/15/2024
    Date last updated: 12/15/2024
    Version: 1.2
    Purpose: Homework 4 JavaScript
*/

// Dynamic date display
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// Range slider code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

// Validation functions
function validateFname() {
    let fname = document.getElementById("fname").value.trim();
    const namePattern = /^[a-zA-Z'-\s]+$/;

    if (!fname) {
        document.getElementById("fname-error").innerHTML = "First name cannot be empty.";
        return false;
    } else if (!namePattern.test(fname)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

function validateMini() {
    let mini = document.getElementById("mini").value.toUpperCase();
    document.getElementById("mini").value = mini;
    const namePattern = /^[A-Z]{0,1}$/;

    if (!namePattern.test(mini)) {
        document.getElementById("mini-error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

function validateLname() {
    let lname = document.getElementById("lname").value.trim();
    const namePattern = /^[a-zA-Z'-\s]+$/;

    if (!lname) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be empty.";
        return false;
    } else if (!namePattern.test(lname)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

function validateDob() {
    const dob = document.getElementById("dob").value;
    const date = new Date(dob);
    const maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (!dob) {
        document.getElementById("dob-error").innerHTML = "Date of birth cannot be empty.";
        return false;
    } else if (date > new Date()) {
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

function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;

    if (!ssn) {
        document.getElementById("ssn-error").innerHTML = "SSN cannot be empty.";
        return false;
    } else if (!ssnPattern.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Enter a valid SSN (e.g., 123-45-6789).";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function validateAddress1() {
    const address1 = document.getElementById("address1").value.trim();

    if (!address1) {
        document.getElementById("address1-error").innerHTML = "Address cannot be empty.";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

function validateCity() {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be empty.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

function validateZcode() {
    const zcode = document.getElementById("zcode").value.trim();
    const zipPattern = /^[0-9]{5}$/;

    if (!zcode) {
        document.getElementById("zcode-error").innerHTML = "Zip code cannot be empty.";
        return false;
    } else if (!zipPattern.test(zcode)) {
        document.getElementById("zcode-error").innerHTML = "Enter a valid 5-digit zip code.";
        return false;
    } else {
        document.getElementById("zcode-error").innerHTML = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/;

    if (!email) {
        document.getElementById("email-error").innerHTML = "Email cannot be empty.";
        return false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("email-error").innerHTML = "Enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById("phnum").value.trim();
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (!phone) {
        document.getElementById("phnum-error").innerHTML = "Phone number cannot be empty.";
        return false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phnum-error").innerHTML = "Enter a valid phone number (e.g., 123-456-7890).";
        return false;
    } else {
        document.getElementById("phnum-error").innerHTML = "";
        return true;
    }
}

// Cookie management
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring((name + "=").length);
        }
    }
    return "";
}

// Prefill form fields with cookies
document.addEventListener("DOMContentLoaded", function () {
    const fields = [
        { id: "fname", cookieName: "firstName" },
        { id: "mini", cookieName: "middleInitial" },
        { id: "lname", cookieName: "lastName" },
        { id: "dob", cookieName: "dob" },
        { id: "ssn", cookieName: "ssn" },
        { id: "address1", cookieName: "address1" },
        { id: "city", cookieName: "city" },
        { id: "zcode", cookieName: "zcode" },
        { id: "email", cookieName: "email" },
        { id: "phnum", cookieName: "phone" }
    ];

    fields.forEach(field => {
        const value = getCookie(field.cookieName);
        if (value) {
            document.getElementById(field.id).value = value;
        }
    });
});
