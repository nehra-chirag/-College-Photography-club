// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId && targetId !== "#") {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Dynamic navbar background on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

function toggleMenu() {
    const navLink = document.querySelector('.nav-link');
    navLink.classList.toggle('active');
  }

// Gallery image hover effects
const galleryImages = document.querySelectorAll(".gallery-images img");
galleryImages.forEach(image => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1)";
        image.style.transition = "transform 0.3s ease-in-out";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
});

// Join Us button alert
document.querySelectorAll(".primary-button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for showing interest in Shutter Squad!.");
    });
});

// Animated text in header section
let headerText = document.querySelector(".header-left h1");
let textArray = ["Welcome to Shutter Squad", "Capture moments", "Create memories"];
let textIndex = 0;

function changeHeaderText() {
    headerText.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}
setInterval(changeHeaderText, 3000);

