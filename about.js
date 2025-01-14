
document.addEventListener("DOMContentLoaded", () => {
    // Toggle Menu Functionality
    function toggleMenu() {
      const navLink = document.querySelector('.nav-link');
      navLink.classList.toggle('active');
    }

    // Attach toggleMenu to the global scope for inline usage in the button
    window.toggleMenu = toggleMenu;

    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    // Observe all sections
    const sections = document.querySelectorAll(".team-member, .event-item");
    sections.forEach((section) => observer.observe(section));

    // Click Effect on Team Images
    const teamImages = document.querySelectorAll(".team-member img");
    teamImages.forEach((img) => {
      img.addEventListener("click", () => {
        alert(`You clicked on ${img.alt}`);
      });
    });
  });