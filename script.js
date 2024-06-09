// Smooth Scrolling JS Code
let scrollLinks = document.querySelectorAll(".menu li a");

scrollLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    let target = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let val;

window.addEventListener("scroll", function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
});

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".hamburger-lines");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.addEventListener("click", function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
});

cancelBtn.addEventListener("click", function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
});

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
