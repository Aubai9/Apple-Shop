// @ts-nocheck
let pic = document.querySelector(".apic");
let contColor = document.querySelector(".content");

function show(phone) {
    pic.src = phone;
}

function colors(color) {
    contColor.style.background = color;
}