/*
    Program name: hw1.js
    Name: Jean Mina
    Date created: 9/15/2024
    Date last updated: 9/21/2024
    Version: 1.1
    Purpose: Homework 1 js
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;


//range slider js code
let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value};
