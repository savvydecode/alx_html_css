
const header  = document.querySelector("header")
const nav = document.querySelector("nav ul");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => {
    header.classList.toggle("active");
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");


});

nav.addEventListener('click', () => {
    header.classList.remove("active");
    nav.classList.remove("active");
    hamburger.classList.remove("active");
});
