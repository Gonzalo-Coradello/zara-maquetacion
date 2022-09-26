const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const overlay = document.querySelector(".overlay");
const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("overlay-visible");
    cart.classList.contains("cart-open") && overlay.classList.add("overlay-visible");
})

document.querySelectorAll(".nav__link").forEach(a => a.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("overlay-visible");

}))

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("cart-open");
    overlay.classList.toggle("overlay-visible");
    navMenu.classList.contains("active") && overlay.classList.add("overlay-visible");
})