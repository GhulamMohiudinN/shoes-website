const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
menuIcon.addEventListener("click", () => {
   
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    
    mobileMenuContainer.classList.remove("active");
});

var carousel = document.querySelector('#carouselExampleDark');
var carouselInstance = new bootstrap.Carousel(carousel);
var carouselCurrent = document.getElementById('carouselCurrent');

carousel.addEventListener('slide.bs.carousel', function (e) {
    carouselCurrent.textContent = ('0' + (e.to + 1)).slice(-2);
});

